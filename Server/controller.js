const axios = require("axios");

module.exports = {
	getInfoFromSwapi: (req, response) => {
        let { id } = req.params;
        axios
            .get("https://swapi.dev/api/people/")
            .then((res) => {
                let characters = res.data.results
                for (let x in characters) {
                    if (characters[x].name.toLowerCase() === id) {
                        response.status(200).send(characters[x])
                    }
                } 
            })
            .catch((error) => console.log(error));
	},
};
