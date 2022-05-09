const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const consign = require("consign");

  const app = express();

  app.set("port", process.env.PORT || config.get("server.port"));

  app.use(bodyParser.json());

  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    next();
  });

  consign({ cwd: "api" })
    .then("data")
    .then("controllers")
    .then("routes")
    .into(app);

module.exports = app;