module.exports = app => {
    const controller = app.modules.uses.services.ValidateCSV.ValidateCSVController;
  
    app.route('/validateCSV')
      .post(controller.validateCSV);
  }