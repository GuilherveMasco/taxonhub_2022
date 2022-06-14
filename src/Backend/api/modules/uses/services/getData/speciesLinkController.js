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
          resultados = resultados.concat(pesquisa)
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

  return controller;
};