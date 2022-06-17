const app = require("../config/express");
const request = require("supertest");
const { listSPLAzurea } = require("./testsSPL");

jest.setTimeout(30000)

test("Teste de busca vazia: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: [""] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca null: ", async () => {
  const response = await request(app)
    .post("/specieslink");
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca por Eichhornia azurea (Sw.) Kunth: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea (Sw.) Kunth"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual(listSPLAzurea);
});

test("Teste de busca AAA: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["AAA"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});

test("Teste de busca Eichhornia azurea azurea: ", async () => {
  const response = await request(app)
    .post("/specieslink")
    .send({ names: ["Eichhornia azurea azurea"] });
  expect(response.statusCode).toEqual(200);
  expect(response.body).toEqual([]);
});