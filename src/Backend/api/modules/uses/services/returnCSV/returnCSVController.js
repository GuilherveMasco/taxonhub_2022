const axios = require("axios");
const papa = require("papaparse");
const himalaya = require('himalaya');
const { readFile } = require('fs');

module.exports = () => {
  const controller = {};

  controller.returnCSV = async (req, res) => {
    const file = "Arquivos/" + req.body.file;
    console.log();
    console.log("Enviando o arquivo:");
    console.log(file);
    console.log();
    
    var respostaArquivo = "";
    if (file.substring(file.length - 4) != ".csv") {
      respostaArquivo = "Arquivo Inválido";
      console.log(respostaArquivo);
      res.send(respostaArquivo);
    } else {
      readFile(file, (err, data) => {
        if (err) {
          respostaArquivo = "Erro ao ler o arquivo";
          console.log(respostaArquivo);
          res.send(respostaArquivo);
          console.log(err);
          return;
        }
        respostaArquivo = "Arquivo Lido com sucesso";
        console.log(respostaArquivo);
        res.json(data.toString());
      });
    }
  };
  return controller;
};