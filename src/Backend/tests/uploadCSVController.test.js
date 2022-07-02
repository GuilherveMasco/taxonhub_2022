const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo Vazio: ", async () => {
    const response = await request(app)
      .post("/upload")
      .send({ file : "testeVazio.csv" });
    expect(response.statusCode).toEqual(200);
    expect(response.text).toBe("Arquivo Vazio");
  });

  test("Teste de Arquivo Não CSV: ", async () => {
    const response = await request(app)
      .get("/upload")
      .send({ file : "testeArquivoNaoCSV.txt" });
    expect(response.statusCode).toEqual(200);
    expect(response.text).toBe("Arquivo Inválido");
  });

test("Teste de Arquivo CSV: ", async () => {
  const response = await request(app)
    .post("/upload")
    .send({ file : "teste.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo CSV");
});
