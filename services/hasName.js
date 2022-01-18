const getProducts = require('../models/getCollection');

const hasName = async ({ name }) => {
  const products = await getProducts('products');
  const haveName = products.some((product) => product.name === name);

  if (haveName) {
    return {
      status: 422,
      err: {
        code: 'invalid_data',
        message: 'Product already exists',
      },
    };
  }
  return {};
};

module.exports = hasName;
