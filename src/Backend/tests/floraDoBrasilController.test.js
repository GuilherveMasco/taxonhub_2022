const app = require("../config/express");
const request = require("supertest");
const { listFDBAzurea, listFDBAzureaReboulia } = require("./testsFDB");

test("Teste de busca com vazio: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: [""] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca de nome não binomial: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por nome binomial que é espécie: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listFDBAzurea);
});

test("Teste de busca por nomes binomiais que são espécies: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea", "Reboulia hemisphaerica"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listFDBAzureaReboulia);
});

test("Teste de busca por nome binomial que não é espécie: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Ney mar"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por nomes binomiais que não são espécies: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Ney mar", "Ju nior"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por nomes binomiais que são e não são espécies intercalados: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea", "Ney mar"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listFDBAzurea);
});
