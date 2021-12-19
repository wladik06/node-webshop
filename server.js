const express = require("express");
const bodyparser = require("body-parser");
const path = require("path");
const app = express();
const connectDB = require("./database/connection");

connectDB();

app.use(
	bodyparser.urlencoded({
		extended: true,
	})
);

app.use("/", require("./routes/router"));

app.set("template engine", "ejs");

app.use("/css", express.static(path.resolve(__dirname, "resources/css")));
app.use("/js", express.static(path.resolve(__dirname, "resources/js")));

app.listen(3000, () => {
	console.log("Runs on http://localhost:3000");
});
