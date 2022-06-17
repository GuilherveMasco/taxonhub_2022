const papa = require("papaparse");
const fs = require('fs');
const { listFDBAzurea } = require("../../../../../tests/testsFDB");

module.exports = () => {
  const controller = {};

  controller.saveCSV = async (req, res) => {
    console.log();
    console.log("Salvando o CSV...");
    console.log();
    
    const csvJson = req.body;
    var csv = papa.unparse(csvJson);

    fs.writeFile('./Arquivos/output_taxonomica.csv', csv, err => {
      if (err) {
        console.error(err);
        res.send("ERRO Ao salvar o arquivo!");
      }
      res.send("Arquivo salvo com sucesso!");
    });

    
  };
  return controller;
};