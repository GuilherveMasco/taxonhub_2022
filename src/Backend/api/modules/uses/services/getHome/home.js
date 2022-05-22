module.exports = () => {
    const controller = {};
  
    controller.startApi = (req, res) => res.status(200).send("Servidor em execução");
  
    return controller;
  }