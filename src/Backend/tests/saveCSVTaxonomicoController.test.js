const app = require("../config/express");
const request = require("supertest");

test("Teste de Salvamento grande com Sucesso: ", async () => {
  const response = await request(app)
    .post("/saveCSVTaxonomico")
    .send([  {
      "nomePesquisado" : "Eichhornia azurea",
      "nomeRetornado" : "Eichhornia azurea (Sw.) Kunth",
      "aceitoSinonimo" : "NOME_ACEITO",
      "sinonimoDe" : null,
      "baseDados" : "FDB",
      "familia" : "Pontederiaceae"
    },
    {
      "nomePesquisado" : "Eichhornia azurea",
      "nomeRetornado" : "Eichhornia azurea var. rhizantha Seub.",
      "aceitoSinonimo" : "SINONIMO",
      "sinonimoDe" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "FDB",
      "familia" : "Pontederiaceae"
    },
    {
      "nomePesquisado" : "Eichhornia azurea",
      "nomeRetornado" : "Eichhornia azurea var. genuina Seub.",
      "aceitoSinonimo" : "SINONIMO",
      "sinonimoDe" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "FDB",
      "familia" : "Pontederiaceae"
    },
    {
      "nomePesquisado" : "Eichhornia azurea",
      "nomeRetornado" : "Eichhornia azurea var. rigida Seub.",
      "aceitoSinonimo" : "SINONIMO",
      "sinonimoDe" : "Eichhornia azurea (Sw.) Kunth",
      "baseDados" : "FDB",
      "familia" : "Pontederiaceae"
    }
    ]);
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo salvo com sucesso!");
});

test("Teste de Salvamento único com Sucesso: ", async () => {
  const response = await request(app)
  .post("/saveCSVTaxonomico")
  .send([
    {
      "nomePesquisado" : "Eichhornia azurea",
      "nomeRetornado" : "Eichhornia azurea (Sw.) Kunth",
      "aceitoSinonimo" : "NOME_ACEITO",
      "sinonimoDe" : null,
      "baseDados" : "FDB",
      "familia" : "Pontederiaceae"
    }
  ]);
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo salvo com sucesso!");
});
