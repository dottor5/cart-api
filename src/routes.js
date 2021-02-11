const express = require("express");
const ProductsController = require("./controllers/ProductController");

const router = express.Router();

router.get("/products", ProductsController.index);
router.get("/products/:id", ProductsController.findById);
router.post("/products", ProductsController.create);
router.delete("/products/:id", ProductsController.delete);

module.exports = router;
