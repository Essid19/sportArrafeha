// l imporation de mongoose :
const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");
//  create match schema :

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  email: { type: String, unique: true, required: true },
  pwd: String,
  role: String,
  tel: { type: String, unique: true },
  avatar: String,
});
userSchema.plugin(uniqueValidator);
// affectation de modele nom a schema :
const user = mongoose.model("User", userSchema);
//  export
module.exports = user;
