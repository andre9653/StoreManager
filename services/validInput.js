const hasName = require('./hasName');
const validateProductName = require('./validateProductName');
const validateProductQuantity = require('./validateProductQuantity');
const validIsNumber = require('./validIsNumber');

const validExist = (value) => value !== undefined;
const isNotUpdate = (value, update) => value !== undefined && update;

const validInput = async (product, notUpdate = true) => {
  const haveName = await hasName(product);
  switch (1 > 0) {
    case validExist(validateProductName(product).err):
      return validateProductName(product);
    case isNotUpdate(haveName.err, notUpdate):
      return haveName;
    case validExist(validIsNumber(product).err):
      return validIsNumber(product);
    case validExist(validateProductQuantity(product).err):
      return validateProductQuantity(product);
    default:
      return {};
  }
};

module.exports = validInput;
