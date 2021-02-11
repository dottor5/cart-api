const Product = require("../models/Product");

module.exports = {
  async index(req, res) {
    const products = await Product.find();

    return res.json(products);
  },

  async create(req, res) {
    const { name, price, image } = req.body;

    const product = await Product.create({ name, price, image });

    return res.json(product);
  },
  async findById(req, res) {
    const { id } = req.params;
    const product = await Product.findById(id);

    return res.json(product);
  },
  async delete(req, res) {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);

    return res.send();
  },
};
