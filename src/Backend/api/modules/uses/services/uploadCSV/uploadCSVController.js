let http = require('http');
let formidable = require('formidable');
let fs = require('fs');

module.exports = () => {
    const controller = {};
  
    controller.uploadCSV = async (req, res) => {

        // Create an instance of the form object
            let form = new formidable.IncomingForm();

            //Process the file upload in Node
            form.parse(req, function (error, fields, file) {
                let filepath = file.Upload.filepath;

                fs.copyFile(filepath, './uploads/'+file.Upload.originalFilename,  err => {
                    if (err) {
                      console.error(err);
                      res.send("ERRO Ao salvar o arquivo!");
                    }
                    res.send("Arquivo salvo com sucesso!");
                  });
                });
    };
  return controller;
};