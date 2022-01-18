const validExist = require('../utils/validExist');
const validQuantity = require('./validQuantity');

const validateQuantityForSales = (array) => {
  switch (1 > 0) {
    case validExist(validQuantity(array).err):
      return validQuantity(array);
    default:
      return {};
  }
};

module.exports = validateQuantityForSales;
