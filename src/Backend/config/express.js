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
  // .then("database") se utilizar migrations e config de BD (sequelize, exemplo)
    .then("modules")
  // .then("middlewares") autenticação ou qualquer outra funcionalidade que deva ser carregada antes de uma rota por inteiro
    .then("routes")
  // .then("shared") se for utilizar providers ou querer automatizar instancias 
  // .then("webhooks") se precisar ouvir eventos
  // .then("error") para testes de erros
    .into(app);

module.exports = app;