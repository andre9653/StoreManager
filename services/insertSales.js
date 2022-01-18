const insertOneCollection = require('../models/insertOneInCollection');

const insertSales = async (products) => {
  const result = await insertOneCollection({ itensSold: products }, 'sales');
  return {
    status: 200,
    message: {
      _id: result.insertedId,
      itensSold: products,
    },
  };
};

module.exports = insertSales;
