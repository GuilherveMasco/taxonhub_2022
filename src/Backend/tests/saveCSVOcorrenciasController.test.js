const app = require("../config/express");
const request = require("supertest");

test("Teste de Dados CSV salvos com sucesso (Muito Conteúdo): ", async () => {
  const response = await request(app)
    .post("/saveCSVOcorrencias")
    .send([  {
      "nomePesquisado" : "Eichhornia azurea (Sw.) Kunth",
      "nomeEncontrado" : "Eichhornia azurea Kunth",
      "nomeAceito" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "SPL",
      "familia" : "Pontederiaceae",
      "pais" : "Brasil",
      "ano" : "2010",
      "mes" : "09",
      "dia" : "23",
      "lat" : "-2.929944",
      "long" : "-41.767483",
      "coordMun" : ""
    },
    {
      "nomePesquisado" : "Eichhornia azurea (Sw.) Kunth",
      "nomeEncontrado" : "Eichhornia azurea Kunth",
      "nomeAceito" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "SPL",
      "familia" : "Pontederiaceae",
      "pais" : "Brasil",
      "ano" : "2008",
      "mes" : "06",
      "dia" : "28",
      "coordMun": ""
    },
    {
      "nomePesquisado" : "Eichhornia azurea (Sw.) Kunth",
      "nomeEncontrado" : "Eichhornia azurea Kunth",
      "nomeAceito" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "SPL",
      "familia" : "Pontederiaceae",
      "pais" : "Brasil",
      "ano" : "2008",
      "mes" : "11",
      "dia" : "24",
      "lat" : "-2.90472006797791",
      "long" : "-41.7766990661621",
      "coordMun" : ""
    },
    {
      "nomePesquisado" : "Eichhornia azurea (Sw.) Kunth",
      "nomeEncontrado" : "Eichhornia azurea Sw.",
      "nomeAceito" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "SPL",
      "familia" : "Pontederiaceae",
      "pais" : "Brasil",
      "ano" : "2017",
      "mes" : "06",
      "dia" : "28",
      "lat" : "-14.776317",
      "long" : "-57.313883",
      "coordMun" : ""
    }
    ]);
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo salvo com sucesso!");
});


test("Teste de Dados CSV salvos com sucesso (Pouco Conteúdo): ", async () => {
  const response = await request(app)
    .post("/saveCSVOcorrencias")
    .send([
      {
        "nomePesquisado" : "Eichhornia azurea (Sw.) Kunth",
        "nomeEncontrado" : "Eichhornia azurea Kunth",
        "nomeAceito" : "Eichhornia azurea (Sw.) Kunth",
        "baseDados" : "SPL",
        "familia" : "Pontederiaceae",
        "pais" : "Brasil",
        "ano" : "2011",
        "mes" : "05",
        "lat" : "-3.000028",
        "long" : "-41.321028",
        "coordMun" : ""
      }
    ]);
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo salvo com sucesso!");
});

