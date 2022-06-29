module.exports = app => {
    const controller = app.modules.uses.services.getCSV.getCSVController;
  
    app.route('/verificaCSV')
      .post(controller.verificaFile);
  }