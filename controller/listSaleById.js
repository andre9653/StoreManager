const getDocumentById = require('../models/getDocumentById');

const listSaleById = async (req, res) => {
  const { id } = req.params;
  const result = await getDocumentById(id, 'sales');
  if (!result || result.err) {
    return res.status(404)
      .json({ err: { code: 'not_found', message: 'Sale not found' } });
}
  return res.status(200).json(result);
};

module.exports = listSaleById;
