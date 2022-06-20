const axios = require("axios");
const papa = require("papaparse");
const http = require('node:http');

module.exports = () => {
  const controller = {};

  controller.buscarDados = async (req, res) => {
    let resultados = [];
    console.log(req.body)
    if (req.body !== undefined && req.body.names !== undefined && req.body.names.length > 0) {
      for (const nomeCientifico of req.body.names) {
        if (!isBlank(nomeCientifico)) {
          let pesquisa = await buscarEspecies(nomeCientifico);
          let dados = await formatarJson(pesquisa);
          const dadosFormatados = formatarDados(dados, nomeCientifico);
          resultados = resultados.concat(dadosFormatados)
        }
      }
    }
    
    var respSaveFile = "";
    
    const saveCSVOcorrencias = http.request(
      {
        hostname: 'localhost',
        port: 8080,
        path: '/saveCSVOcorrencias',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Content-Length': Buffer.byteLength(JSON.stringify(resultados))
        }}, (resp) => {
          
          resp.setEncoding('utf8');
          
          resp.on('data', (chunk) => {
            respSaveFile += chunk;
          });
          
          resp.on('end', () => {
            console.error(respSaveFile);
          });
        });
        
        saveCSVOcorrencias.on('error', (e) => {
          console.error(`problem with request: ${e.message}`);
        });

        saveCSVOcorrencias.write(JSON.stringify(resultados));
        saveCSVOcorrencias.end();
        
        res.send(resultados);
      };
      
      const buscarEspecies = async (nomeCientifico) => {
        let url = `https://api.splink.org.br/records/format/json/ScientificName/${nomeCientifico}`;
        
    try {
      let corpo = await axios.get(url);
      return corpo.data;
    } catch (error) {
      throw new Error(`Erro no acesso aos dados da API: ${error.message}`);
    }
  };

  const formatarJson = async (dados) => {
    let saidaJson = dados.result;
    return saidaJson;
  };

  const formatarDados = (dados, nomeEspecie) => {
    let saida = [];
    if (dados === null) return null;
    var nomeCompleto = ""

    dados.forEach(function(obj) {
      nomeCompleto = obj.scientificName + ' ' + obj.scientificNameAuthorship;
      var temp = {
        nomePesquisado: nomeEspecie,
        nomeEncontrado: nomeCompleto,
        nomeAceito: nomeEspecie,
        baseDados: "SPL",
        familia: obj.family,
        pais: obj.country,
        ano: obj.year,
        mes: obj.month,
        dia: obj.day,
        lat: obj.decimalLatitude,
        long: obj.decimalLongitude,
        coordMun: ""
      };
      saida.push(temp);
    });
    return saida;
  };

  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };

  return controller;
};