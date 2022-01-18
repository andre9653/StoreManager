const validateQuantity = (quantity) => {
  if (quantity <= 0) {
    return {
      status: 422,
      err: {
        code: 'invalid_data',
        message: '"quantity" must be larger than or equal to 1',
      },
    };
  }
  return {};
};

module.exports = validateQuantity;
