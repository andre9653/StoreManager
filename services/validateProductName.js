const validateProductName = ({ name }) => {
  if (name.length < 5) {
    return {
      status: 422,
      err: {
        code: 'invalid_data',
        message: '"name" length must be at least 5 characters long',
      },
    };
  }

  return {};
};

module.exports = validateProductName;
