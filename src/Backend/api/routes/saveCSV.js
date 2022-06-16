module.exports = app => {
    const controller = app.modules.uses.services.saveCSV.saveCSVController;
  
    app.route('/saveCSV')
      .get(controller.saveCSV);
  }