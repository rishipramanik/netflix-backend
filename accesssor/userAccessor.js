const Users = require("../db/model/userModel").Users;

function addNewUser(user) {
  return Users.create(user);
}

function findByEmail(email) {
  return Users.find({ email: email }).exec();
}

function findByUserId(userId) {
  return Users.find({ userId }).exec();
}

function updateUser(user) {
  return user.save();
}

module.exports = {
  addNewUser,
  findByEmail,
  findByUserId,
  updateUser,
};
