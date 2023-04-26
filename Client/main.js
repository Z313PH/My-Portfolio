const starwarsForm = document.querySelector("form");
const input = document.querySelector("#sw-input");
const starwarsInfo = document.querySelector(".starwars-info");

const showCharacter = (e) => {
	e.preventDefault();
	let name = e.target[0].value.toLowerCase();
	axios
		.get(`/starwars/${name}`)
		.then((res) => {
		
			const {
				name,
				height,
				mass,
				hair_color,
				skin_color,
				eye_color,
				birth_year,
				gender,
			} = res.data;

			starwarsInfo.innerHTML = `
                <h1 style="color: #E63946; text-shadow: 0 0 .5rem black; margin-top: .8rem;">${name}</h1>
                <p>Height: ${height}</p>
                <p>Mass: ${mass}</p>
                <p>Hair Color: ${hair_color}</p>
                <p>Skin Color: ${skin_color}</p>
                <p>Eye Color: ${eye_color}</p>
                <p>Birth Year: ${birth_year}</p>
                <p>Gender: ${gender}</p>
            `;

			starwarsInfo.style = "opacity: 1;"
		})
		.catch((error) => console.log(error));
	
		input.value = ""
};

starwarsForm.addEventListener("submit", showCharacter);
