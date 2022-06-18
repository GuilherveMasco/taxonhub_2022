const papa = require("papaparse");
const http = require('node:http');
const fs = require('fs');

module.exports = () => {
  const controller = {};

  controller.saveCSVTaxonomica = async (req, res) => {
    console.log();
    console.log("Salvando o CSV...");
    console.log();
    
    const csvJson = req.body;
    var csv = papa.unparse(csvJson);

    fs.writeFile('./Arquivos/output_taxonomica.csv', csv, err => {
      if (err) {
        console.error(err);
        res.send("ERRO ao salvar o arquivo!");
        console.log("ERRO ao salvar o arquivo!");
      } else {
        res.send("Arquivo salvo com sucesso!");
        console.log("Arquivo salvo com sucesso!");
      }
    });
    
  };


  controller.saveCSVOcorrencias = async (req, res) => {
    const caminho = req.body.caminho;

    console.log();
    console.log("Salvando o CSV de Ocorrencias em:");
    console.log(caminho);
    console.log();

    const csvOcorrencias = JSON.stringify({ "names" : ["Eichhornia azurea (Sw.) Kunth"] });
    var csv = "";
    

    const getCSV = http.request(
      {
        hostname: 'localhost',
        port: 8080,
        path: '/specieslink',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(csvOcorrencias)
        }}, (resp) => {

          resp.setEncoding('utf8');

          resp.on('data', (chunk) => {
            csv += chunk;
          });
          
          resp.on('end', () => {
            csv = papa.unparse(csv);
            fs.writeFile(caminho, csv, err => {
              if (err) {
                console.error(err);
                res.send("ERRO ao salvar o arquivo!");
                console.log("ERRO ao salvar o arquivo!");
              } else{
                res.send("Arquivo salvo com sucesso!");
                console.log("Arquivo salvo com sucesso!");
              }
            });
          });
        });
          
        getCSV.on('error', (e) => {
          console.error(`problem with request: ${e.message}`);
        });

        getCSV.write(csvOcorrencias);
        getCSV.end();
  };
  return controller;
};