const csv = require('csv-parser');
const fs = require('fs');

module.exports = () => {
  const controller = {};

  controller.handle = async (req, res) => {
    const result = await execute(req.file.path, req.params.name);

    return res.json(result);
  }

  const execute = async (file, searchedName) => { 
    try {
      let results = [];

      fs.createReadStream(file)
        .pipe(csv({}))
        .on('data', (data) => {
          results.push(data);
        })
        .on('end', async () => {
          console.log("Finished")
          stopped = true;
        })
        const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
      
        await delay(2000, null);

        const names = results.filter(name => name["Nome pesquisado"].toLowerCase() === searchedName.toLowerCase());


        if(!names.length) {
          return {
            error: "Nenhum nome de especie correspondente"
          }
        }

        return names;
    } catch (e) {
      return {
        error: "Arquivo não foi encontrado ou falha na conversão"
      }
    }
  }

  return controller;
}
