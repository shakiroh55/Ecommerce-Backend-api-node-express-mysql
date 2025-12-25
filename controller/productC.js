const productModel = require('../model/productM');

async function createProduct (req, res) {
  try {
    const { product_name, price } = req.body;
  await productModel.createProduct(product_name, price);
  res.status(201).json({ message: 'Product added' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function listProducts (req, res){
  try {
    const [products] = await productModel.listProducts();
  res.json(products);
  } catch (error) {
    error.status(500).json({ message: error.message });
  }
};

module.exports = { createProduct, listProducts };