const deleteDocument = require('../models/deleteDocument');

const deleteProduct = async (req, res) => {
  const { id } = req.params;
  const del = await deleteDocument(id, 'products');
  if (del.err) {
    return res.status(422).json(del);
  }
  return res.status(200).json({ _id: del.insertedId });
};

module.exports = deleteProduct;
