const UserAccessor = require("../accesssor/userAccessor");
const Roles = require("../db/constants/roles");
const State = require("../db/constants/state");

function addNewUser(user) {
  return UserAccessor.addNewUser({
    ...user,
    isEmailVerified: false,
    isPhoneNoVerified: false,
    role: Roles.ROLE_USER,
    state: State.Active,
  });
}

module.exports = {
  addNewUser,
};
