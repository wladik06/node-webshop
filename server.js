const express = require('express');

const app = express();

app.get("/", (req, res) => {
	res.send("UCN Webshop");
});

app.listen(3000, () => {
	console.log("Runs on http://localhost:$(3000)");
});