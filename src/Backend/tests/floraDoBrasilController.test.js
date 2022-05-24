const app = require("../config/express");
const request = require("supertest");
const { listFDBAzurea } = require("./testsFDB");

test("Teste de busca vazia: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: [""] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca null: ", async () => {
  const response = await request(app)
    .post("/floradobrasil");
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por Eichhornia azurea: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listFDBAzurea);
});

test("Teste de busca AAA: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["AAA"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([null]);
});

test("Teste de busca Eichhornia azurea azurea: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: ["Eichhornia azurea azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([null]);
});

test("Teste de busca com espaço antes do nome: ", async () => {
  const response = await request(app)
    .post("/floradobrasil")
    .send({ names: [" Eichhornia azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([null]);
});