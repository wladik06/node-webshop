const express = require('express');
const route = express.Router();
const services = require('../services/render');

route.get("/", services.homeRoutes);

route.get("/add_product", services.add_product);

route.get("/update_product", services.update_product);

module.exports = route;