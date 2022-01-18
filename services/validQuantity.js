const validateProductQuantity = require('./validateProductQuantity');
const validIsNumber = require('./validIsNumber');

const validQuantity = (arrayOfProducts) => {
  let valid = {};

  arrayOfProducts.forEach((product) => {
    const { quantity } = product;
    const err = validateProductQuantity({ quantity });
    const isNumber = validIsNumber({ quantity });
    if (err.err) valid = err;
    if (isNumber.err) valid = isNumber;
  });
  return valid;
};
module.exports = validQuantity;
