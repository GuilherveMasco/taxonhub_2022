const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo Válido: ", async () => {
  const response = await request(app)
    .post("/validateCSV")
    .send({ file : "testeValidacao_ocorrencias.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo Válido");
});

test("Teste de Arquivo Inválido: ", async () => {
  const response = await request(app)
  .post("/validateCSV")
  .send({ file : "testeValidacao_ocorrenciasInvalido.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo Inválido");
});

test("Teste de Arquivo Inválido: ", async () => {
  const response = await request(app)
  .post("/validateCSV")
  .send({ file : "testeValidacao_ocorrenciasInvalidoo.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Erro ao ler o arquivo");
});
