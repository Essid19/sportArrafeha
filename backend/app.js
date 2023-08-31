// import express module
const express = require("express");
// import mongoose module
const mongoose = require("mongoose");
// sportDB nom de la data base
// la connection avec la data base
mongoose.connect("mongodb://127.0.0.1:27017/sportDB");
// import body-parser module
const bodyParser = require("body-parser");
// create express application
const app = express();
// import bcrypt module
const bcrypt = require("bcrypt");
// import multer
const multer = require("multer");
// import path module (shortcut)
const path = require("path");
// appel a axios
const axios = require("axios");

// configuration
// send json responses
app.use(bodyParser.json());
//get objects from request
app.use(bodyParser.urlencoded({ extended: true }));
// Security configuration
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, Accept, Content-Type, X-Requested-with, Authorization, expiresIn"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, DELETE, OPTIONS, PATCH, PUT"
  );
  next();
});

// path configuration
app.use("/images", express.static(path.join("backend/images")));
const MIME_TYPE = {
  "image/png": "png",
  "image/jpeg": "jpg",
  "image/jpg": "jpg",
};

const storage = multer.diskStorage({
  // destination
  destination: (req, file, cb) => {
    const isValid = MIME_TYPE[file.mimetype];
    let error = new Error("Mime type is invalid");
    if (isValid) {
      error = null;
    }
    cb(null, "backend/images");
  },
  filename: (req, file, cb) => {
    const name = file.originalname.toLowerCase().split(" ").join("-");
    const extension = MIME_TYPE[file.mimetype];
    const imgName = name + "-" + Date.now() + "-crococoder-" + "." + extension;
    cb(null, imgName);
  },
});

//
//  imporation des modeles  :
// model match
const Match = require("./models/match");

// model team
const Team = require("./models/team");

// model player
const Player = require("./models/player");

// model imc
const imc = require("./models/caluclueimc");

// model user
const User = require("./models/user");
// import jsonwebtoken
const jwt = require("jsonwebtoken");
// import express-seesion module
const session = require("express-session");
const { Console } = require("console");
// configuration token
const secretKey = "croco2023";
app.use(
  session({
    secret: secretKey,
  })
);

// DATA BASE SIMULATION
let matchesTab = [
  { id: 1, scoreOne: 0, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 2, scoreOne: 1, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 3, scoreOne: 6, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
  { id: 4, scoreOne: 2, scoreTwo: 2, teamOne: "fcb", teamTwo: "atm" },
];

let teamsTab = [
  {
    id: 1,
    name: "atletitco",
    stadium: "wanda",
    owner: "salah",
  },
  {
    id: 2,
    name: "juve",
    stadium: "jvuv",
    owner: "salah",
  },
  {
    id: 3,
    name: "real",
    stadium: "santiago",
    owner: "salah",
  },
];
let playersTab = [
  { id: 1, name: "salah", age: 23, position: "fcb" },
  { id: 2, name: "karim", age: 23, position: "fcb" },
  { id: 3, name: "karim", age: 23, position: "fcb" },
  { id: 4, name: "ahmed", age: 25, position: "fcb" },
];
let stadiumsTab = [
  { id: 1, name: "wanda", capacity: "obohiou", country: "koop^m" },
  { id: 2, name: "santiago", capacity: "obohiou", country: "koop^m" },
  { id: 3, name: "campnow", capacity: "obohiou", country: "koop^m" },
  { id: 4, name: "sidi rzig", capacity: "obohiou", country: "koop^m" },
];
function generateId(t) {
  if (t.length == 0) {
    return 1;
  } else {
    let id = t[0].id;
    for (let i = 1; i < t.length; i++) {
      if (t[i].id > id) {
        id = t[i].id;
      }
    }
    return id + 1;
  }
}
function cmToMeters(cm) {
  return cm / 100;
}
// business logic( ensemble de fonctions ):

// MATCHES
// get all matches
app.get("/matches", (req, res) => {
  // traitement de la req
  console.log("here into BL : get all matches");
  Match.find().then((data) => {
    res.json({ matches: data });
  });
  // res.json({ matches: matches });
});

// get match by id
// path parametre id is a param
app.get("/matches/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : get match by id");
  let id = req.params.id;
  console.log("here id mtach", id);
  Match.findOne({ _id: id }).then((data) => {
    res.json({ match: data });
  });
});

// add match
app.post("/matches", (req, res) => {
  console.log("here into BL : add match");
  // traitement de la req
  let obj = new Match(req.body);
  // methode save
  obj.save((err, doc) => {
    console.log(err, doc);
    err ? res.json({ msg: "NOK" }) : res.json({ msg: "OK" });
  });
  // obj.id = generateId(matchesTab);
  // matchesTab.push(obj);
});

// delete match
app.delete("/matches/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : delete match from bd");
  let id = req.params.id;
  Match.deleteOne({ _id: id }).then((data) => {
    data.deletedCount == 1
      ? res.json({ msg: "deleted" })
      : res.json({ msg: "not deleted" });
  });
});

// update match
app.put("/matches", (req, res) => {
  console.log("here into BL");
  Match.updateOne({ _id: req.body._id }, req.body).then((data) => {
    console.log(data);
    data.nModified == 1
      ? res.json({ msg: "edit" })
      : res.json({ msg: "not edit" });
  });
});

// search matches by score one or score two

// app.get("/matches/:sc1/:sc2", (req, res) => {
//   // traitement
//   let sc1 = req.params.sc1;
//   let sc2 = req.params.sc2;
//   let findedmatches = matchesTab.filter((e) => {
//     return e.scoreOne == sc1 || e.scoreTwo == sc2;
//   });
//   res.json({ matches: findedmatches });
// });
app.post("/matches/search", (req, res) => {
  let obj = req.body;
  // let findedmatches = matchesTab.filter((e) => {
  //   return e.scoreOne == obj.sc1 || e.scoreTwo == obj.sc2;
  // });
  res.json({ matches: findedmatches });
});
// PLAYERS
// get all players
app.get("/players", (req, res) => {
  // traitement de la req
  Player.find().then((data) => {
    res.json({ players: data });
  });
});

// get player by id
// path parametre id is a param
app.get("/players/:id", (req, res) => {
  // traitement de la req
  let id = req.params.id;
  console.log("here id mtach", id);
  Player.findOne({ _id: id }).then((data) => {
    res.json({ player: data });
  });
});

// add player
app.post("/players", (req, res) => {
  try {
    Team.findById(req.body.teamId).then((team) => {
      if (!team) {
        return res.status(404).json({ message: "Team not found" });
      }
      console.log(req.body);
      console.log(team);
      let player = new Player({
        name: req.body.name,
        position: req.body.position,
        age: req.body.age,
        team: req.body.teamId,
      });
      console.log(player);
      player.save((err, doc) => {
        team.players.push(doc);
        team.save();
        res.status(201).json({ isAdded: true });
      });
    });
  } catch (error) {
    res
      .status(500)
      .json({ message: "Error creating player", error: error.message });
  }
});

// delete player
app.delete("/players/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : delete player");
  let id = req.params.id;
  Player.deleteOne({ _id: id }).then((data) => {
    res.json({ msg: "deleted" });
  });
});

// update player
app.put("/players", (req, res) => {
  console.log("here into BL :update player");
  let obj = req.body;
  Player.updateOne({ _id: req.body._id }, req.body).then((data) => {
    res.json({ msg: "player updated successfully" });
  });
});

// StadiumS
// get all stadiums
app.get("/stadiums", (req, res) => {
  console.log("here into BL : get all matches");
  res.json({ stadiums: stadiumsTab });
});

// get stadium by id
// path parametre id is a param
app.get("/stadiums/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : get stadium by id");
  let id = req.params.id;
  console.log("here id stadium", id);
  let stadium = stadiumsTab.find(function (e) {
    return e.id == id;
  });
  match ? res.json({ stadium: stadium }) : res.json({ error: "notfound" });
});

// add stadium
app.post("/stadiums", (req, res) => {
  // traitement de la req
  let obj = req.body;
  obj.id = generateId(stadiumsTab);
  console.log("here obj", obj);
  stadiumsTab.push(obj);
  res.json({ msg: "added object" });
});

// delete stadium
app.delete("/stadiums/:id", (req, res) => {
  console.log("here into BL : delete stadium");
  let id = req.params.id;
  let x = false;
  for (let i = 0; i < stadiumsTab.length; i++) {
    if (stadiumsTab[i].id == id) {
      stadiumsTab.splice(i, 1);
      x = true;
      break;
    }
  }
  x
    ? res.json({ msg: "deleted with success" })
    : res.json({ msg: "id not found" });
});

// update stadium
app.put("/stadiums", (req, res) => {
  // traitement de la req
  let obj = req.body;
  for (let i = 0; i < stadiumsTab.length; i++) {
    if (stadiumsTab[i].id == obj.id) {
      stadiumsTab.splice(i, 1, obj);
      break;
    }
  }
  res.json({ msg: "stadium updated successfully" });
});

// TEAMS
// get all teams
app.get("/teams", (req, res) => {
  // traitement de la req
  console.log("here into BL : get all matches");
  Team.find().then((data) => {
    res.json({ teams: data });
  });
});

// get team by id
// path parametre id is a param
app.get("/teams/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : get team by id");
  let id = req.params.id;
  console.log("here id team", id);
  Team.findOne({ _id: id }).then((data) => {
    res.json({ team: data });
  });
});

// add team
app.post("/teams", (req, res) => {
  console.log("here into BL : add match");
  // traitement de la req
  let obj = new Team(req.body);
  // methode save
  obj.save((err, doc) => {
    console.log(err, doc);
    err ? res.json({ msg: "NOK" }) : res.json({ msg: "OK" });
  });
});

// delete team
app.delete("/teams/:id", (req, res) => {
  // traitement de la req
  console.log("here into BL : delete team");
  Team.deleteOne({ _id: req.params.id }).then((data) => {
    res.json({ msg: "deleted" });
  });
});

// update team
app.put("/teams", (req, res) => {
  // traitement de la req
  console.log("here into BL");
  Team.updateOne({ _id: req.body._id }, req.body).then((data) => {
    res.json({ msg: "team updated successfully" });
  });
});

// player search :
app.post("/playersearch", (req, res) => {
  console.log("here into BL");
  let obj = req.body;
  let players = playersTab.filter((e) => {
    return e.name == obj.name || e.age == obj.age;
  });
  res.json({ player: players });
  if (!player) {
    res.json({ msg: "not found" });
  }
});

// user logique
app.post("/imc", (req, res) => {
  console.log("here into BL : add imc");
  // traitement de la req
  let obj = new imc(req.body);
  let taille = obj.taille / 100;
  let chaine;

  let imccalc = obj.poids / (taille * taille);
  console.log(imccalc);
  if (imccalc >= 18.5 && imccalc <= 25) {
    chaine = "Corpulence normale";
  } else if (imccalc > 25 && imccalc <= 30) {
    chaine = "Surpoids";
  } else if (imccalc > 30 && imccalc <= 35) {
    chaine = "Obésité modérée";
  } else if (imccalc > 35 && imccalc <= 40) {
    chaine = "Obésité sévère";
  } else if (imccalc > 40) {
    chaine = "Obésité morbide ou massive";
  }
  obj.imcvalue = imccalc;
  // methode save
  obj.save((err, doc) => {
    console.log(err, doc);
    err ? res.json({ msg: "NOK" }) : res.json({ chaine: chaine });
  });
  // obj.id = generateId(matchesTab);
  // matchesTab.push(obj);
});

app.post(
  "/users/signup",
  multer({ storage: storage }).single("img"),
  (req, res) => {
    console.log("here into bl: signup", req.body);
    console.log("here into bl: file", req.file);

    bcrypt.hash(req.body.pwd, 10).then((data) => {
      req.body.pwd = data;
      req.body.avatar = "http://localhost:3000/images/" + req.file.filename;
      let user = new User(req.body);
      user.save((err, doc) => {
        console.log("here error", err);
        console.log("here doc", doc);
        if (err) {
          if (err.errors.email && err.errors.tel) {
            res.json({ msg: "2" });
          } else if (err.errors.email) {
            res.json({ msg: "0" });
          } else if (err.errors.tel) {
            res.json({ msg: "1" });
          }
        } else {
          res.json({ msg: "added with success" });
        }
      });
    });
  }
);

app.post("/users/login", (req, res) => {
  let user;
  console.log("here into bl: login", req.body);
  User.findOne({ email: req.body.email })
    .then((data) => {
      console.log("here data after search", data);
      if (!data) {
        res.json({ msg: "check ur email" });
      } else {
        user = data;
        return bcrypt.compare(req.body.pwd, user.pwd);
      }
    })
    .then((pwdResult) => {
      console.log("here pwd result", pwdResult);
      if (!pwdResult) {
        res.json({ msg: "please check ur pwd" });
      } else {
        let x = {
          id: user._id,
          fName: user.firstName,
          lName: user.lastName,
          role: user.role,
        };
        // If the user is valid, generate a JWT token
        const token = jwt.sign({ userconnected: x }, secretKey, {
          expiresIn: "1h",
        });
        res.json({ user: token, msg: "success" });
      }
    });
});
// search weather
app.post("/weather", (req, res) => {
  let obj = {};
  // traitement de la req
  console.log(req.body.city);
  let key = "d44c3d52d836292d82851c1bb0cf9fea";
  const weatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${req.body.city}&appid=${key}`;

  axios
    .get(weatherURL)
    .then((response) => {
      if (response.status == 404) {
        res.status(404).json({ msg: "introuvable" });
      } else {
        console.log(response.data);
        obj.humidity = response.data.main.humidity;
        obj.temp = response.data.main.temp;
        obj.windspeed = response.data.wind.speed;
        obj.pressure = response.data.main.pressure;
        obj.image = response.data.weather[0].icon;
        res.json({ obj: obj });
      }
    })
    .catch((error) => {
      if (error.response && error.response.status == 404) {
        res.status(404).json({ msg: "introuvable" });
      } else {
        res.status(500).json({ msg: "Erreur lors de la requête à l'API" });
      }
    });
});
// api teams
app.post("/apiteams", async (req, res) => {
  let obj = {};
  // traitement de la req
});
// get all users
app.get("/users", (req, res) => {
  // traitement de la req
  console.log("here into BL : get all users");
  User.find().then((data) => {
    res.json({ users: data });
  });
});
// make app importable from another files
module.exports = app;
