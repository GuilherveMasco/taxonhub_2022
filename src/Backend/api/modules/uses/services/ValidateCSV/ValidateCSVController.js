const axios = require("axios");
const papa = require("papaparse");
const himalaya = require('himalaya');
const { readFile } = require('fs');

module.exports = () => {
  const controller = {};

  controller.validateCSV = async (req, res) => {
    const file = "uploads/" + req.body.file;
    console.log();
    console.log("Enviando o arquivo:");
    console.log(file);
    console.log();
    
    var respostaArquivo = [];
    readFile(file, (err, data) => {
      if (err) {
        respostaArquivo = {resposta:"Erro ao ler o arquivo"};
        console.log(respostaArquivo);
        res.json(respostaArquivo);
        console.log(err);
        return;
      }
      
      console.log();

      var arquivoCSV = papa.parse(data.toString());

      if (arquivoCSV.data[0].length == 6)
        respostaArquivo = {resposta:"Arquivo Válido"};
      else
        respostaArquivo = {resposta:"Arquivo Inválido"};
            
      res.json(respostaArquivo);
      
      });
  };
  return controller;
};