module.exports = app => {
  const controller = app.modules.uses.services.saveCSV.saveCSVController;

  app.route('/saveCSVTaxonomico')
    .post(controller.saveCSVTaxonomica);

  app.route('/saveCSVOcorrencias')
    .post(controller.saveCSVOcorrencias);
    
  app.route('/downloadCSVOcorrencias')
    .get(controller.downloadCSVOcorrencias);
    
  app.route('/downloadCSVTaxonomica')
    .get(controller.downloadCSVTaxonomica);
}