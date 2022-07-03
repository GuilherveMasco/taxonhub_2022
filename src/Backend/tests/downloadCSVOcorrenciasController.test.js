const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo CSV taxonômico retornado com sucesso: ", async () => {
    const response = await request(app)
    .get("/downloadCSVOcorrencias")
    expect(response.statusCode).toEqual(200);
    
    expect(JSON.stringify(response)).toContain(`"accept-ranges":"bytes"`);
    expect(JSON.stringify(response)).toContain('"content-disposition":"attachment; filename=\\"output_ocorrencias.csv\\""');
    expect(JSON.stringify(response)).toContain(`"access-control-allow-headers":"Origin, X-Requested-With, Content-Type, Accept"`);
    expect(JSON.stringify(response)).toContain(`"access-control-allow-origin":"*"`);
    expect(JSON.stringify(response)).toContain(`"cache-control":"public, max-age=0"`);
    expect(JSON.stringify(response)).toContain(`"connection":"close"`);
    expect(JSON.stringify(response)).toContain(`"content-type":"text/csv; charset=UTF-8"`);
    expect(JSON.stringify(response)).toContain(`"x-powered-by":"Express"`);

    expect(response.text).toContain("nomePesquisado");
    expect(response.text).toContain("nomeEncontrado");
    expect(response.text).toContain("nomeAceito");
    expect(response.text).toContain("baseDados");
    expect(response.text).toContain("familia");
    expect(response.text).toContain("pais");
    expect(response.text).toContain("ano");
    expect(response.text).toContain("mes");
    expect(response.text).toContain("lat");
    expect(response.text).toContain("long");
    expect(response.text).toContain("coordMun");
  });