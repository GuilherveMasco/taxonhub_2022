const papa = require("papaparse");
const fs = require('fs');
const { listFDBAzurea } = require("../../../../../tests/testsFDB");

module.exports = () => {
  const controller = {};

  controller.saveCSV = async (req, res) => {
    const file = "Arquivos/" + req.body.file;
    console.log();
    console.log("Salvando o CSV:");
    console.log(file);
    console.log();

    // Convert back to CSV
    var csv = papa.unparse(listFDBAzurea);


    fs.writeFile('./Arquivos/test.csv', csv, err => {
      if (err) {
        console.error(err);
      }
      res.send("Salvo com sucesso!");
    });

    
  };
  return controller;
};