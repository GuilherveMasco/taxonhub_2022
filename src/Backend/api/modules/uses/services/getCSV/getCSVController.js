const csv = require('csv-parser');
const fs = require('fs');

module.exports = () => {
  const controller = {};

  controller.handle = async (req, res) => {
    const result = await execute(req.file.path);

    return res.json(result);
  }

  const execute = async (file) => { 
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

        return results;
    } catch (e) {
      return {
        error: "Arquivo não foi encontrado ou falha na conversão"
      }
    }
  }

  return controller;
}
