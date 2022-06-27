const axios = require("axios");
const http = require('node:http');
const https = require("https");

module.exports = () => {
  const controller = {};

  controller.buscarDados = async (req, res) => {
    let resultados = [];
    console.log(req.body)
    if (req.body !== undefined && req.body.names !== undefined && req.body.names.length > 0) {
      for (const nomeEspecie of req.body.names) {
        if (!isBlank(nomeEspecie)) {
          let pesquisa = await buscarEspecies(nomeEspecie);
          let dados = await formatarJson(pesquisa);
          const dadosFormatados = formatarDados(dados, nomeEspecie);
          if (dadosFormatados != null) {
            resultados = resultados.concat(dadosFormatados)
          }
        }
      }
    }
 
    var respSaveFile = "";
    
    const saveCSVTaxonomico = http.request(
      {
        hostname: 'localhost',
        port: 8080,
        path: '/saveCSVTaxonomico',
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
        
        saveCSVTaxonomico.on('error', (e) => {
          console.error(`problem with request: ${e.message}`);
        });

        saveCSVTaxonomico.write(JSON.stringify(resultados));
        saveCSVTaxonomico.end();
        
        res.send(resultados);
      };

  const buscarEspecies = async (nomeEspecie) => {
    let url = `https://servicos.jbrj.gov.br/flora/taxon/${nomeEspecie}`;
    try {
      let corpo = await axios.get(url,
      {
        httpsAgent: new https.Agent({ rejectUnauthorized: false })
      }
      );
      return corpo.data;
    } catch (error) {
      throw new Error(`Erro no acesso aos dados da API: ${error.message}`);
    }
  };

  const formatarJson = async (dadosHtml) => {
    dadosStr = dadosHtml.toString();
    let rmConectado = dadosStr.replace(/\}Conectado com\: 10\.10\.100\.29\<br\/\>/g,  '}');
    let rmSuccess = rmConectado.replace('"success": true,', '');
    let rmBreakLine = rmSuccess.split('\n').join('');
    let corpo = JSON.parse(rmBreakLine);
    let saidaJson = corpo.result;
    return saidaJson;
  };

  const formatarDados = (dados, nomeEspecie) => {
    let saida = [];
    if (dados === null) return null;

    dados.forEach(function(obj) {
      var temp = {
        nomePesquisado: nomeEspecie,
        nomeRetornado: obj.scientificname,
        aceitoSinonimo: obj.taxonomicstatus,
        sinonimoDe: obj.acceptednameusage,
        baseDados: "FDB",
        familia: obj.family
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