const getCollection = require('../models/getCollection');

const listSales = async (_req, res) => {
  const sales = await getCollection('sales');
  return res.status(200).json({ sales });
};

module.exports = listSales;
