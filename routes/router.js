const express = require("express");
const route = express.Router();
const services = require("../services/render");
const controller = require("../controller/controller");

route.get("/", services.homeRoutes);

route.get("/add_product", services.add_product);

route.get("/update_product", services.update_product);

route.post("/api/products", controller.create);
route.get("/api/products", controller.find);
route.put("/api/products/:id", controller.update);
route.delete("/api/products/:id", controller.delete);

module.exports = route;
