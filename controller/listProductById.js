const getProductById = require('../models/getDocumentById');

const listProductById = async (req, res) => {
  const { id } = req.params;
  const haveProduct = await getProductById(id, 'products');
  if (haveProduct.err) return res.status(422).json(haveProduct);
  return res.status(200).json(haveProduct);
};

module.exports = listProductById;
