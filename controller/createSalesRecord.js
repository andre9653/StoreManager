const saleRegisterStatus = require('../services/saleRegisterStatus');

const createSalesRecord = async (req, res) => {
  const arrayOfProducts = req.body;

  const result = await saleRegisterStatus(arrayOfProducts);
  return res.status(result.status).json(result.message);
};

module.exports = createSalesRecord;
