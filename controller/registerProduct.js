const createProduct = require('../models/insertOneInCollection');
const validInput = require('../services/validInput');

const registerProduct = async (req, res) => {
  const { name, quantity } = req.body;
  const result = await validInput({ name, quantity });
  if (result.err) {
    return res.status(result.status).json({ err: result.err });
  }

  const create = await createProduct({ name, quantity }, 'products');
  return res.status(201).json({ _id: create.insertedId, name, quantity });
};

module.exports = registerProduct;
