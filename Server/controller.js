const axios = require("axios");

module.exports = {
	getAllCharacters: (req, response) => {
		axios
			.get("https://swapi.dev/api/people/")
            .then((res) => {
				let all = [];
				let characters = res.data.results;
				for (let x in characters) {
					all.push(characters[x].name);
                }
                response.status(200).send(all);
			})
			.catch((error) => console.log(error));
	},

	getInfoFromSwapi: (req, response) => {
		let { id } = req.params;
		axios
			.get("https://swapi.dev/api/people/")
			.then((res) => {
				let characters = res.data.results;
				for (let x in characters) {
					if (characters[x].name.toLowerCase() === id) {
						response.status(200).send(characters[x]);
					}
				}
			})
			.catch((error) => console.log(error));
	},
};
