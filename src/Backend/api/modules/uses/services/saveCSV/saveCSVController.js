const papa = require("papaparse");
const fs = require('fs');

module.exports = () => {
  const controller = {};

  controller.saveCSVTaxonomica = async (req, res) => {
    console.log();
    console.log("Salvando o CSV Taxonomico...");
    console.log();
    
    const csvJson = req.body;
    var csv = papa.unparse(csvJson);
    
    fs.writeFile('./Arquivos/output_taxonomica.csv', csv, err => {
      if (err) {
        console.error(err);
        res.send("ERRO ao salvar o arquivo!");
      } else {
        res.send("Arquivo salvo com sucesso!");
      }
    });
    
  };


  controller.saveCSVOcorrencias = async (req, res) => {
    console.log();
    console.log("Salvando o CSV de Ocorrências...");
    console.log();
    
    const csvJson = req.body;
    var csv = papa.unparse(csvJson);
    
    fs.writeFile('./Arquivos/output_ocorrencias.csv', csv, err => {
      if (err) {
        console.error(err);
        res.send("ERRO ao salvar o arquivo!");
      } else {
        res.send("Arquivo salvo com sucesso!");
      }
    });
  };
  
  controller.downloadCSVOcorrencias = async (req, res) => {
    console.log();
    console.log("Baixando o CSV de Ocorrências...");
    console.log();

    res.download('./Arquivos/output_ocorrencias.csv');
  };

  controller.downloadCSVTaxonomica = async (req, res) => {
    console.log();
    console.log("Baixando o CSV Taxonomica...");
    console.log();

    res.download('./Arquivos/output_taxonomica.csv');
  };
  return controller;
};