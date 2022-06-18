const app = require("../config/express");
const request = require("supertest");

test("Teste de Salvamento grande com Sucesso: ", async () => {
  const response = await request(app)
    .get("/saveCSVOcorrencias")
    .send({
      "caminho" : "./Arquivos/output_ocorrencias.csv"
  });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo salvo com sucesso!");
}, 10000);


test("Teste de Salvamento grande com Insucesso: ", async () => {
  const response = await request(app)
    .get("/saveCSVOcorrencias")
    .send({
      "caminho" : "./Arquivos/asd/output_ocorrencias.csv"
  });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("ERRO ao salvar o arquivo!");
}, 10000);

