const mongoose = require("mongoose");
const SessionSchema = require("../schema/sessionSchema").SessionSchema;

const Sessions = mongoose.model("sesions", SessionSchema);

module.exports = {
  Sessions,
};
