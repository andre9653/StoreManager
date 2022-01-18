const deleteDocument = require('../models/deleteDocument');
const getDocument = require('../models/getDocumentById');
const incInModel = require('../models/incInModel');

const deleteSale = async (req, res) => {
  const { id } = req.params;
  const result = await getDocument(id, 'sales');
  if (result.err) {
    return res.status(422)
      .json({ err: { code: 'invalid_data', message: 'Wrong sale ID format' } });
  }
  result.itensSold.forEach(async (product) => {
    const { productId, quantity } = product;
    await incInModel(productId, { quantity }, 'products');
  });
  await deleteDocument(id, 'sales');
  return res.status(200).json(result);
};

module.exports = deleteSale;
