const mongoose = require("mongoose");
const { Schema } = mongoose;

const SessionSchema = new Schema({
  userId: String,
  token: String,
});

module.exports = {
  SessionSchema,
};
