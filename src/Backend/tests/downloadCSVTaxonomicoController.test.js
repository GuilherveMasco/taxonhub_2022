const app = require("../config/express");
const request = require("supertest");

test("Teste de Arquivo CSV taxonômico retornado com sucesso: ", async () => {
    const response = await request(app)
    .get("/downloadCSVTaxonomica")
    expect(response.statusCode).toEqual(200);
    
    expect(JSON.stringify(response)).toContain(`"accept-ranges":"bytes"`);
    expect(JSON.stringify(response)).toContain('"content-disposition":"attachment; filename=\\"output_taxonomica.csv\\""');
    expect(JSON.stringify(response)).toContain(`"access-control-allow-headers":"Origin, X-Requested-With, Content-Type, Accept"`);
    expect(JSON.stringify(response)).toContain(`"access-control-allow-origin":"*"`);
    expect(JSON.stringify(response)).toContain(`"cache-control":"public, max-age=0"`);
    expect(JSON.stringify(response)).toContain(`"connection":"close"`);
    expect(JSON.stringify(response)).toContain(`"content-type":"text/csv; charset=UTF-8"`);
    expect(JSON.stringify(response)).toContain(`"x-powered-by":"Express"`);

    expect(response.text).toContain("nomePesquisado");
    expect(response.text).toContain("nomeRetornado");
    expect(response.text).toContain("aceitoSinonimo");
    expect(response.text).toContain("sinonimoDe");
    expect(response.text).toContain("baseDados");
    expect(response.text).toContain("familia");
  });