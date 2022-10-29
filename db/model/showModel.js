const mongoose = require("mongoose");
const ShowSchema = require("../schema/showSchema").ShowSchema;

const Shows = mongoose.model("shows", ShowSchema);

module.exports = {
  Shows,
};