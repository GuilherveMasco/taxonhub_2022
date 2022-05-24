const axios = require("axios");

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
          resultados = resultados.concat(dadosFormatados)
        }
      }
    }
    res.send(resultados);
  };

  const buscarEspecies = async (nomeEspecie) => {
    let url = `https://servicos.jbrj.gov.br/flora/taxon/${nomeEspecie}`;

    try {
      let corpo = await axios.get(url);
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