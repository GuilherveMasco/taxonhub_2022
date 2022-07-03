const app = require("../config/express"); 
const request = require("supertest"); 
const fs = require('mz/fs');

const dirPath = __dirname.substring(0, __dirname.length - 5);
const filePath = `${dirPath}Arquivos\\teste.csv`;

let testFilePath = null;
describe('Teste de Arquivo enviado com sucesso', () => {
    
    it('should upload the test file to CDN', () => 
    fs.exists(filePath)
    .then((exists) => {
        if (!exists) throw new Error('file does not exist'); 
        return request(app)
        .post('/upload')
        .attach('Upload', filePath)
        .then((res) => {
            const { success, message, filePath } = res.body;
            expect(success).toBeTruthy();
            expect(message).toBe('Uploaded successfully');
            expect(typeof filePath).toBeTruthy();
            expect(res.statusCode).toEqual(200);
            testFilePath = filePath;
        })
        .catch(err => console.log(err));
    })
    )
})

afterAll(() => {
    fs.rm("./uploads/teste.csv", { recursive:true }, (err) => {
        if(err)
            console.error(err.message);
    })
});
  