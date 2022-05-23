const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo Inválido: ", async () => {
  const response = await request(app)
    .get("/getCSV")
    .send({ file : "testeOutput_ocorrencias.txt" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Arquivo Inválido");
});

test("Teste de Arquivo Inexistente: ", async () => {
  const response = await request(app)
    .get("/getCSV")
    .send({ file : "testeOutput.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toBe("Erro ao ler o arquivo");
});

test("Teste de Arquivo Válido: ", async () => {
  const response = await request(app)
    .get("/getCSV")
    .send({ file : "testeOutput_ocorrencias.csv" });
  expect(response.statusCode).toEqual(200);
  expect(response.text).toContain("entry_name,found_name,accepted_name,base_de_dados,familia,pais,year,month,day,lat,long,Coord_SPL_Mun");
  expect(response.text).toContain("Abildgaardia ovata (Burm.f. Kral),Abildgaardia ovata (Burm. F. Kral),Fimbristylis ovata (Burm.f. J.Kern),SPL,Cyperaceae,,1938,1,16,-30.03,-51.23,");
});
