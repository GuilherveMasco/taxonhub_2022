let http = require('http');
let formidable = require('formidable');
let fs = require('fs');

module.exports = () => {
    const controller = {};
  
    controller.uploadCSV = async (req, res) => {

            let form = new formidable.IncomingForm();

            let resposta = [];

            form.parse(req, function (error, fields, file) {
                let filepath = file.Upload.filepath;

                fs.copyFile(filepath, './uploads/'+file.Upload.originalFilename,  err => {
                    if (err) {
                      console.error(err);
                      resposta = {resposta:"ERRO Ao salvar o arquivo!"};
                    }else{
                      resposta = {resposta:"Arquivo salvo com sucesso!"};
                    }
                      console.log(resposta)
                      res.json(resposta);
                  });
                });
    };
  return controller;
};