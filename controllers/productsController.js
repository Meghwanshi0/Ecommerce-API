
const Product = require('../models/product');

//Create a product
exports.createProduct = async (req, res) => {
  try {
    const { name, quantity } = req.body;
    const product = await Product.create({ name, quantity });
    res.json({ product });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//List all the products
exports.listProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.json({ products });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

//Delete a product
exports.deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.json({ message: 'Product deleted' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};


//Update the quantity of a Product
exports.updateQuantity = async (req, res) => {
  try {
    const { id } = req.params;
    const { number } = req.query;
    const product = await Product.findById(id);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

    product.quantity = number;
    await product.save();

    res.json({ product, message: 'Updated successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
