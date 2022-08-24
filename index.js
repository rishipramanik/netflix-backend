const express = require("express");
const { default: mongoose } = require("mongoose");
const app = express();
const UserHandler = require("./handler/userHandler");
const AuthHandler = require("./handler/authHandler");

app.use(express.json());

let clusterUrl = "netflix-backend.frjeuxl.mongodb.net";
let username = process.env.MONGO_USERNAME;
let password = process.env.MONGO_PASSWORD;
let dbName = "netflix";
let dbUrl = `mongodb+srv://${username}:${password}@${clusterUrl}/${dbName}`;

mongoose
  .connect(dbUrl)
  .then(() => console.log("MongoDB connected"))
  .catch((error) =>
    console.log(
      `Unable to connect, error = ${error}, ${dbUrl}`
    )
  );

app.get("/", function (req, res) {
  res.send("Hello from netflix");
});

app.post("/user", UserHandler.signupHandler);

app.post("/login", AuthHandler.login);

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
