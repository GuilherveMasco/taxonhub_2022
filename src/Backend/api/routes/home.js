module.exports = app => {
    const controller = app.modules.uses.services.getHome.home; //mudei caminho da rota só
    
    app.route('/')
      .get(controller.startApi);
  }