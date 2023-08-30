// l imporation de mongoose :
const mongoose = require("mongoose");

//  create match schema :

const matchSchema = mongoose.Schema({
  scoreOne: Number,
  scoreTwo: Number,
  teamOne: String,
  teamTwo: String,
});

// affectation de modele nom a schema :
const match = mongoose.model("Match", matchSchema);
//  export
module.exports = match;
