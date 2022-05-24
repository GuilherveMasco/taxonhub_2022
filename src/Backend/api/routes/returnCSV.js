module.exports = app => {
    const controller = app.modules.uses.services.returnCSV.returnCSVController;
  
    app.route('/getCSV')
      .get(controller.returnCSV);
  }