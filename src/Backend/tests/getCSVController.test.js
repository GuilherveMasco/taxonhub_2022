const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo corrompido: ", async () => {
  const response = await request(app)
    .post("/verificaCSV")
    .send({ file : "inexistenteghdhdfgfgfg.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("Arquivo Corrompido");
});

test("Teste de Arquivo de extensão CSV: ", async () => {
  const response = await request(app)
  .post("/verificaCSV")
  .send({ file : "output_taxonomica.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("Arquivo Com Formato Válido");
});

  test("Teste Arquivo de extensão não CSV: ", async () => {
    const response = await request(app)
      .post("/verificaCSV")
      .send({ file : "testeUpload.txt" });
    expect(response.statusCode).toEqual(200);
    expect(response.text).toContain("Arquivo Com Formato Inválido");
  });