const axios = require("axios");
const papa = require("papaparse");
const himalaya = require('himalaya');
const { readFile } = require('fs');
const csv = require('csv-parser');
const fs = require('fs');

module.exports = () => {
  const controller = {};

  controller.verificaFile = async (req, res) => {
    const file = "Arquivos/" + req.body.file;
    console.log();
    console.log("Lendo o arquivo:");
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
        res.send(respostaArquivo);
      });
    }
  };
  
  controller.handle = async (req, res) => {
    const result = await execute(req.file.path);

    return res.json(result);
  }

  const execute = async (file) => { 
    try {
      let results = [];

      fs.createReadStream(file)
        .pipe(csv({}))
        .on('data', (data) => {
          results.push(data);
        })
        .on('end', async () => {
          console.log("Finished")
          stopped = true;
        })
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
      
        await delay(2000, null);

        return results;
    } catch (e) {
      return {
        error: "Arquivo não foi encontrado ou falha na conversão"
      }
    }
  }

  return controller;
};
