const getDocumentById = require('../models/getDocumentById');
const incInModel = require('../models/incInModel');
const insertSales = require('./insertSales');
const validateQuantityForSales = require('./validateQuantityForSales');

const messageError = {
  err: {
    code: 'invalid_data',
    message: 'Wrong product ID or invalid quantity',
  },
};

const sumProperty = (array) => {
  let count = 0;
  array.forEach((item) => {
    count += item.quantity;
  });
  return count;
};

const validDecrement = (quantity1, quantity2) => {
  if (quantity1 < quantity2) return false;
  return true;
};

const verifyModelDecrement = async (id, collection, array) => {
  const sum = sumProperty(array);
  const document = await getDocumentById(id, collection);
  return validDecrement(sum, document.quantity);
};

const saleRegisterStatus = async (arrayOfProducts) => {
  const valid = validateQuantityForSales(arrayOfProducts);
  if (valid.err) {
    return { status: valid.status, message: messageError };
  }

  const verifyQuantity = await verifyModelDecrement(arrayOfProducts[0].productId,
    'products', arrayOfProducts);

  if (verifyQuantity) {
    return {
      status: 404,
      message: { err: { code: 'stock_problem',
        message: 'Such amount is not permitted to sell' } } };
  }

  arrayOfProducts.forEach(async (product) => {
    const { productId, quantity } = product;
    await incInModel(productId, { quantity: -quantity }, 'products');
  });
  const insert = await insertSales(arrayOfProducts);
  return insert;
};

module.exports = saleRegisterStatus;
