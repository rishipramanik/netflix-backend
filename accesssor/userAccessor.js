const Users = require("../db/model/userModel").Users;

function addNewUser(user) {
  return Users.create(user);
}

function findByEmail(email) {
  return Users.find({ email: email }).exec();
}

module.exports = {
  addNewUser,
  findByEmail,
};
