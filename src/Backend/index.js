// const express = require("express");
// const app = express();

const app = require('./config/express');


app.get("/",(req,res) => {
    res.render("index");
})



app.listen(8080,() => {
    console.log("aplicação rodando")
});