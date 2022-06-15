const axios = require("axios");
const papa = require("papaparse");
const himalaya = require('himalaya');
const { readFile } = require('fs');

module.exports = () => {
  const controller = {};

  controller.validateCSV = async (req, res) => {
    const file = "Arquivos/" + req.body.file;
    console.log();
    console.log("Enviando o arquivo:");
    console.log(file);
    console.log();
    
    var respostaArquivo = "";
    readFile(file, (err, data) => {
      if (err) {
        respostaArquivo = "Erro ao ler o arquivo";
        console.log(respostaArquivo);
        res.send(respostaArquivo);
        console.log(err);
        return;
      }
      
      console.log();

      var arquivoCSV = papa.parse(data.toString());

      if (arquivoCSV.data[0].length == 6)
        respostaArquivo = "Arquivo Válido";
      else
        respostaArquivo = "Arquivo Inválido";
            
      res.send(respostaArquivo);
      
      });
  };
  return controller;
};