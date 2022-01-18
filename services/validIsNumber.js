const validIsNumber = ({ quantity }) => {
  if (typeof quantity !== 'number') {
    return {
      status: 422,
      err: {
        code: 'invalid_data',
        message: '"quantity" must be a number',
    },
  };
}
  return {};
};

module.exports = validIsNumber;
