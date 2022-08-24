const R = require("ramda");
const jwt = require("jsonwebtoken");
const UserAccessor = require("../accesssor/userAccessor");
const SECRET_KEY = "gyejgcbsdjkvgbdymfjhukjv";

function login(email, password) {
  return UserAccessor.findByEmail(email).then((users) => {
    console.log(`user = ${JSON.stringify(users)}`);
    if (R.isNil(users) || users.length === 0) {
      return { statusCode: 401, message: "Invalid email!" };
    }
    let user = users[0];
    console.log(
      `user password = ${(user, password)} and password = ${password}`
    );
    if (R.isNil(user.password) || user.password !== password) {
      return { statusCode: 401, message: "Invalid Password!" };
    }
    const token = jwt.sign(
      { userId: user.userId, email: user.email, role: user.role },
      SECRET_KEY
    );
    return { statusCode: 200, token: token };
  });
}

module.exports = { login };
