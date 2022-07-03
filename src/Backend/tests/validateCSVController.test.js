const app = require("../config/express");
const request = require("supertest");

test("Teste de CSV de formatação correta: ", async () => {
  const response = await request(app)
    .post("/validateCSV")
    .send({ file : "output_taxonomica.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("Arquivo Válido");
});

test("Teste de CSV de formatação incorreta ", async () => {
  const response = await request(app)
  .post("/validateCSV")
  .send({ file : "output_taxonomica_invalido.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("Arquivo Inválido");
});

test("Teste de CSV com erro na leitura ", async () => {
  const response = await request(app)
  .post("/validateCSV")
  .send({ file : "testeValidacao_ocorrenciasInvalidoo.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("Erro ao ler o arquivo");
});
