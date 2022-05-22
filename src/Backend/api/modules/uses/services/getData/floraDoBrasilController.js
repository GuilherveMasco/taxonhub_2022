const axios = require("axios");
const papa = require("papaparse");
const himalaya = require('himalaya');

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
          resultados = resultados.concat(dadosFormatados);
        }
      }
    }
    res.send(resultados);
  };

  const buscarEspecies = async (nomeEspecie) => {
    let url = "https://servicos.jbrj.gov.br/flora/taxon/" + nomeEspecie;
    try {
      return await axios.get(url)
    } catch (error) {
      console.error(error)
    }
  };

  const formatarJson = async (dadosHtml) => {
    dadosStr = dadosHtml.toString();
    let saida = dadosStr.replace("Conectado com: 10.10.100.29", "");
    saidaJson = himalaya.parse(saida);
    return saidaJson;
  };

  const formatarDados = (dados, nomeEspecie) => {
    try {
      const parse = papa.parse(dados, {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
      });
      if (Object.keys(parse.errors).length !== 0) {
        throw new Error("CSV Incorreto");
      }

      return CriarObjetoRetorno(parse, nomeEspecie);
    } catch (error) {
      throw new Error(`Erro na formatação dos dados: ${error.message}`);
    }

    function CriarObjetoRetorno(parse, nomeEspecie) {
      let nomeAceito = "";
      return parse.data.map((row) => {
        let nome = row["scientificname"];
        if (row["taxonomicstatus"] === "NOME_ACEITO") nomeAceito = nome;

        return {
          nomePesquisado: nomeEspecie,
          nomeRetornado: nome,

          aceitoSinonimo: row["taxonomicstatus"] === "NOME_ACEITO"? "NOME_ACEITO": "SINONIMO",
          sinonimoDe: nomeAceito === nome ? "" : nomeAceito,
          baseDados: "FDB",
          familia: row["family"],
        };
      });
    }
  };
  const isBlank = (str) => {
    return !str || /^\s*$/.test(str);
  };
  return controller;
};