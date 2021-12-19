exports.homeRoutes = (req, res) => {
    res.render('index.ejs');
}

exports.add_product = (req, res) => {
	res.render("add_product.ejs");
};

exports.update_product = (req, res) => {
	res.render("update_product.ejs");
};