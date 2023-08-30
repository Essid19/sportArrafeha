// l imporation de mongoose :
const mongoose = require("mongoose");

//  create match schema :

const teamSchema = mongoose.Schema({
  name: String,
  stadium: String,
  owner: String,
});

// affectation de modele nom a schema :
const team = mongoose.model("Team", teamSchema);
//  export
module.exports = team;
