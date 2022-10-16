const { v4: uuidv4 } = require("uuid");
const R = require("ramda");
const UserAccessor = require("../accesssor/userAccessor");
const Roles = require("../db/constants/roles");
const State = require("../db/constants/state");

function addNewUser(user) {
  return UserAccessor.addNewUser({
    ...user,
    userId: uuidv4(),
    isEmailVerified: false,
    isPhoneNoVerified: false,
    role: Roles.ROLE_USER,
    state: State.Active,
    profiles: [],
  });
}

function addNewProfile(userId, name) {
  return UserAccessor.findByUserId(userId)
    .then((users) => users[0])
    .then((user) => {
      if (!R.isNil(user)) {
        if (R.isNil(user.profiles)) {
          user.profiles = [];
        }
        user.profiles.push({ profileId: uuidv4(), name, active: true });
        return UserAccessor.updateUser(user);
      }
    });
}

function deactivateProfile(userId, profileId) {
  return UserAccessor.findByUserId(userId)
    .then((users) => users[0])
    .then((user) => {
      if (!R.isNil(user)) {
        user.profiles = user.profiles.map((profile) => {
          if (profile.profileId === profileId) {
            return { ...profile, active: false };
          } else {
            return profile;
          }
        });
        return UserAccessor.updateUser(user);
      }
    });
}

module.exports = {
  addNewUser,
  addNewProfile,
  deactivateProfile,
};
