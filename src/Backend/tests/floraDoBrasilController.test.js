const app = require("../config/express");
const request = require("supertest");
const { listFDBAzurea } = require("./testsFDB");

jest.setTimeout(1000)
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