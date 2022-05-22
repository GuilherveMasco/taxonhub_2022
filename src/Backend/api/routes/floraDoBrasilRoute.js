module.exports = app => {
    const controller = app.controllers.floraDoBrasilController;
  
    app.route('/floradobrasil')
      .post(controller.buscarDados);
  }