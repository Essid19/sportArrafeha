const mongoose = require("mongoose");

//  create match schema :

const calculeSchema = mongoose.Schema({
  name: String,
  taille: Number,
  poids: Number,
  imcvalue: Number,
});

// affectation de modele nom a schema :
const calcule = mongoose.model("Calcule", calculeSchema);
//  export
module.exports = calcule;
