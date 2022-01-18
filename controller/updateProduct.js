const updateProductModel = require('../models/updateDocument');
const validInput = require('../services/validInput');

const updateProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const { id } = req.params;
  const result = await validInput({ name, quantity }, false);
  if (result.err) {
    return res.status(result.status).json({ err: result.err });
  }
  const update = await updateProductModel(id, { name, quantity }, 'products');
  return res.status(200).json({ _id: update.insertedId, name, quantity });
};

module.exports = updateProduct;
