// const express = require("express");
// const app = express();

const app = require('./config/express');

const multer = require("multer");
const path = require("path");
const port = app.get('port');

app.set('view engine', 'ejs');

const storage = multer.diskStorage({
    destination: function(req,file,cb){
        cb(null,"uploads/")
    },
    filename:function(req,file,cb){
        if (path.extname(file.originalname) == '.csv'){
        cb(null, file.originalname + Date.now() + path.extname(file.originalname));
        }else{
            console.log("Formato de arquivo incorreto.")
        }
    }
})

const upload = multer({storage});


app.get("/",(req,res) => {
    res.render("index");
})

app.post("/upload", upload.single("file"), (req,res)=> {
    res.send("Arquivo recebido");
})

app.listen(8080,() => {
    console.log("aplicação rodando")
});