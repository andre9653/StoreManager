// const { json } = require('body-parser');
const InternalServerError = require('../errors/InternalServerError');

const serverError = (err, req, res, _next) => {
  if (err instanceof InternalServerError) return res.status(err.status).json(err.message);
};

module.exports = serverError;
