const AuthService = require("../srevice/authService");

function login(req, res) {
  const { email, password } = req.body;
  return AuthService.login(email, password)
    .then((output) => {
      if (output.statusCode === 200) {
        res.status(200).send("login success");
      } else {
        res.status(output.statusCode).send("Login Failed!");
      }
    })
    .catch((error) => res.status(500).send(error));
}

module.exports = {
  login,
};
