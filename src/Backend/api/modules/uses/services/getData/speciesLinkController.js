const axios = require("axios")
module.exports = () => {
	const controller = {};

	controller.buscarDados = async (req, res) => {
		let dados = await buscaDireta();

		res.send(dados)
	}
	const buscaDireta = async () => {
		return axios
			.get("http://api.splink.org.br/records/format/json/institutionCode/USP/collectionCode/SPF/ScientificName/Rauvolfia%20sellowii/Cantinoa%20althaeifolia/StateProvince/São%20Paulo/Rio%20de%20Janeiro/Pernambuco/Synonyms/AlgaeBase", {
			})
			.then((response) => {
				return response.data;
			})
			.catch((error) => {
				if (error.response) {
					throw new Error(
					`Website retornou com erro: ${error.response.status}`
				);
				} else if (error.request) {
					throw new Error(`Website request error: ${error.request}`);
				} else {
					throw new Error(`Error in setting up the request: ${error.message}`);
				}
			});
	};

	return controller;
};