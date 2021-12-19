var productDB = require("../model/model");

exports.create = (req, res) => {
	if (!req.body) {
		res.status(400).send({
			message: "This can not be emtpy!",
		});
		return;
	}

	const product = new productDB({
		name: req.body.name,
		price: req.body.price,
		category: req.body.category,
		status: req.body.status,
	});

	product
		.save(product)
		.then((data) => {
			res.redirect("/add_product");
		})
		.catch((err) => {
			res.status(500).send({
				message: err.message || "An error occured while creating new product.",
			});
		});
};

exports.find = (req, res) => {
	if (req.query.id) {
		const id = req.query.id;

		productDB
			.findById(id)
			.then((data) => {
				if (!data) {
					res.status(404).send({
						message: "Product " + id + " not found.",
					});
				} else {
					res.send(data);
				}
			})
			.catch((err) => {
				res.status(500).send({
					message: "An error occured when retrieving product " + id + ".",
				});
			});
	} else {
		productDB
			.find()
			.then((product) => {
				res.send(product);
			})
			.catch((err) => {
				res.status(500).send({
					message:
						err.message ||
						"An error occured while retrieving product information.",
				});
			});
	}
};

exports.update = (req, res) => {
	if (!req.body) {
		return res.status(400).send({
			message: "This field can not be empty!",
		});
	}

	const id = req.params.id;
	productDB
		.findByIdAndUpdate(id, req.body, {
			useFindAndModify: false,
		})
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: "Can not update product with" + id + ".",
				});
			} else {
				res.send(data);
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "An error occured while trying to update product information.",
			});
		});
};

exports.delete = (req, res) => {
	const id = req.params.id;

	productDB
		.findByIdAndDelete(id)
		.then((data) => {
			if (!data) {
				res.status(404).send({
					message: "Can not delete product " + id + ".",
				});
			} else {
				res.send({
					message: "Product deleted successfully!",
				});
			}
		})
		.catch((err) => {
			res.status(500).send({
				message: "Can not delete product " + id + ".",
			});
		});
};