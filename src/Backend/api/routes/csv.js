const os = require('os')
const multer  = require('multer')
const upload = multer({ dest: os.tmpdir() })

module.exports = app => {
  const getCSVController = app.modules.uses.services.getCSV.getCSVController;
  const getCSVByNameController = app.modules.uses.services.getDataCSVByName.getDataCSVByNameController;

  /* app.route("/CSV")
    .get(upload.single('file'), getCSVController.handle) */

  app.route("/CSVByName/:name")
    .get(upload.single('file'), getCSVByNameController.handle)
}