const app = require("../config/express");
const request = require("supertest");
const { listSPLAzurea, listSPLAzureaReboulia, listSPLAzureaNC, listSPLAzureaRebouliaNC, listSPLAzureaRebouliaINT } = require("./testsSPL");

jest.setTimeout(60000)

test("Teste de busca com vazio: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: [""] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por nome científico: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea (Sw.) Kunth"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzurea);
});

test("Teste de busca por nomes científicos: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea (Sw.) Kunth", "Reboulia hemisphaerica (L.) Raddi"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzureaReboulia);
});

test("Teste de busca por nome não científico científico: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzureaNC);
});

test("Teste de busca por nomes não científicos: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea", "Reboulia hemisphaerica"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzureaRebouliaNC);
});

test("Teste de busca com nome não encontrado: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Neymar"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca com nomes não encontrados: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Neymar", "Junior"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por nomes intercalados: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea (Sw.) Kunth", "Reboulia hemisphaerica", "Neymar"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzureaRebouliaINT);
});