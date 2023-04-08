const user = require("express").Router();

user.get("/", function (req, res, next) {
  res.send("respond with a resource");
});

module.exports = user;
