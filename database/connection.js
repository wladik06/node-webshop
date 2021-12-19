const mongoose = require("mongoose");
require("dotenv").config({
	path: ".env",
});

const connectDB = async () => {
	try {
		const con = await mongoose.connect(process.env.DB_URI);
		console.log(`DB connected: ${con.connection.host}`);
	} catch (err) {
		console.log(err);
		process.exit(1);
	}
};

module.exports = connectDB;
