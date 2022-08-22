const R = require("ramda");
const UserService = require("../srevice/userService");

function signupHandler(req, res) {
  const userInput = req.body;
  console.log(`userInput = ${JSON.stringify(userInput)}`);
  if (R.isNil(userInput.email)) {
    res.status(400).send("Email not found");
    return;
  }
  if (R.isNil(userInput.phoneNo)) {
    res.status(400).send("Phone not found");
    return;
  }
  if (R.isNil(userInput.name)) {
    res.status(400).send("Name not found");
    return;
  }
  if (R.isNil(userInput.password)) {
    res.status(400).send("Password not present");
    return;
  }
  UserService.addNewUser(userInput)
    .then(() => res.status(200).send("User Created Successfully!"))
    .catch((error) => res.status(500).send(error));
}

module.exports = {
  signupHandler,
};
