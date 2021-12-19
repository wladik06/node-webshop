const mongoose = require("mongoose");

var schema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	price: String,
	category: {
		type: String,
		required: true,
	},
	status: String,
});

const productDB = mongoose.model("productdb", schema);

module.exports = productDB;
