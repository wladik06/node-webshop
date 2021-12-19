const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");

const app = express();

app.get("/", (req, res) => {
	res.render('index.ejs');
});

app.use(
	bodyparser.urlencoded({
		extended: true,
	})
);

app.set("template engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "/css")));
app.use("/js", express.static(path.resolve(__dirname, "/js")));

app.listen(3000, () => {
	console.log("Runs on http://localhost:3000");
});
