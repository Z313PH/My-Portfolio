const express = require("express");
const cors = require("cors");
const path = require("path");

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.static("Client"));

app.get("/", (req, res) => {
	res.status(200).sendFile(path.join(__dirname, "../Client/main.html"));
});

const { getInfoFromSwapi } = require("./controller");

app.get("/starwars/:id", getInfoFromSwapi);

app.listen(4000, console.log("Server up and running on port 4000"));
