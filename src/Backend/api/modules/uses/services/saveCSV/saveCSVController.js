const papa = require("papaparse");
const fs = require('fs');
const { listFDBAzurea } = require("../../../../../tests/testsFDB");

module.exports = () => {
  const controller = {};

  controller.saveCSV = async (req, res) => {
    console.log();
    console.log("Salvando o CSV:");
    console.log();
    
    const csvJson = req.body;
    var csv = papa.unparse(csvJson);

    fs.writeFile('./Arquivos/output_taxonomica.csv', csv, err => {
      if (err) {
        console.error(err);
      }
      res.send("Salvo com sucesso!");
    });

    
  };
  return controller;
};