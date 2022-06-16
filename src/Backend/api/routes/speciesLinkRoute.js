module.exports = app => {
    const controller = app.modules.uses.services.getData.speciesLinkController;
  
    app.route('/specieslink')
      .post(controller.buscarDados);
  }