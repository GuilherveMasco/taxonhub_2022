module.exports = app => {
    const controller = app.controllers.home;
  
    app.route('/')
      .get(controller.startApi);
  }