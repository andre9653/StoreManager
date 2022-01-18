const getProducts = require('../models/getCollection');

const listProducts = async (_req, res) => {
  const products = await getProducts('products');
  return res.status(200).json({ products });
};

module.exports = listProducts;
