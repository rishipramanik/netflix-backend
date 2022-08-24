const Sessions = require("../db/model/sessionModel").Sessions;

function createNewSession(userId, token) {
  let session = { userId, token };
  return Sessions.create(session);
}

function getSessionByKey(userId, token) {
  let filterQuery = { userId, token };
  return Sessions.find(filterQuery).exec();
}

module.exports = {
  createNewSession,
  getSessionByKey,
};
