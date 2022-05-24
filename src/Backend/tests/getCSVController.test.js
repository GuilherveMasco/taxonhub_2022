const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo Inválido: ", async () => {
  const response = await request(app)
    .post("/uploadCSV")
    .send({ file : "testeUpload.txt" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo Inválido");
});

test("Teste de Arquivo Inexistente: ", async () => {
  const response = await request(app)
    .post("/uploadCSV")
    .send({ file : "teste.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Erro ao ler o arquivo");
});

test("Teste de Arquivo Válido: ", async () => {
  const response = await request(app)
    .post("/uploadCSV")
    .send({ file : "testeUpload.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo Lido com sucesso");
});
