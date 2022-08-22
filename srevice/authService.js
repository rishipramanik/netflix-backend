const R = require("ramda");
const UserAccessor = require("../accesssor/userAccessor");

function login(email, password) {
  return UserAccessor.findByEmail(email)
  .then(users => {
    console.log(`user = ${JSON.stringify(users)}`);
    if (R.isNil(users) || users.length === 0) {
      return { statusCode: 401, message: "Invalid email!" };
    }
    let user = users[0];
    console.log(`user password = ${user,password} and password = ${password}`)
    if (R.isNil(user.password) || user.password !== password) {
      return { statusCode: 401, message: "Invalid Password!" };
    }
    return { statusCode: 200 };
  });
}

module.exports = { login };
