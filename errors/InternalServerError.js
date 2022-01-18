class InternalServerError extends Error {
  constructor(message) {
    super(message);
    this.message = message;
    this.statusCode = 500;
    // Error.captureStackTrace(this);
    console.log('passei aqui');
  }
}

module.exports = InternalServerError;
