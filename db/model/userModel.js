const mongoose = require("mongoose");
const UserSchema = require("../schema/userSchema").UserSchema;

const Users = mongoose.model("users", UserSchema);

module.exports = {
  Users,
};
