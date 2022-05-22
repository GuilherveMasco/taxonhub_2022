module.exports = app => {
    const controller = app.modules.uses.services.getData.floraDoBrasilController; //mudei o caminho só
  
    app.route('/floradobrasil')
      .post(controller.buscarDados);
  }