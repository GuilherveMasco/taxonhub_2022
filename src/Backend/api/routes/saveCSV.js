module.exports = app => {
  const controller = app.modules.uses.services.saveCSV.saveCSVController;

  app.route('/saveCSVTaxonomico')
    .get(controller.saveCSVTaxonomica);

  app.route('/saveCSVOcorrencias')
    .get(controller.saveCSVOcorrencias);
}