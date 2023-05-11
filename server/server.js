const express = require("express");
const cors = require("cors");
const app = express();

require("dotenv").config();
const { SERVER_PORT } = process.env;

app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, "../client")));

app.get("/", (req, res) => {
	rollbar.log("Someone accessed website!");
	res.status(200).sendFile(path.join(__dirname, "../client/main.html"));
});

app.listen(
	SERVER_PORT,
	console.log(`Server up and running on port ${SERVER_PORT}`)
);
