// l imporation de mongoose :
const mongoose = require("mongoose");

//  create match schema :

const playerSchema = mongoose.Schema({
  name: String,
  age: Number,
  position: String,
});

// affectation de modele nom a schema :
const player = mongoose.model("Player", playerSchema);
//  export
module.exports = player;
