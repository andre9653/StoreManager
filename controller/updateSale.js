const getDocument = require('../models/getDocumentById');
const updateDocument = require('../models/updateDocument');

const updateSale = async (req, res) => {
  const { id } = req.params;
  const product = req.body[0];
  if (product.quantity <= 0 || typeof product.quantity !== 'number') {
    return res.status(422)
      .json({ err: { code: 'invalid_data', message: 'Wrong product ID or invalid quantity' } });
  }
  await updateDocument(id, { itensSold: [product] }, 'sales');
  const result = await getDocument(id, 'sales');
  return res.status(200).json(result);
};

module.exports = updateSale;
