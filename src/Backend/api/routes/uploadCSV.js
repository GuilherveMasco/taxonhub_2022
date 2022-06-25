module.exports = app => {
    const controller = app.modules.uses.services.uploadCSV.uploadCSVController;
  
    app.route("/upload").post(controller.uploadCSV);
}