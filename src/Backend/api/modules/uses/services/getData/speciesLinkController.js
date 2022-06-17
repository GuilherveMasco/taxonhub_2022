const axios = require("axios");

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