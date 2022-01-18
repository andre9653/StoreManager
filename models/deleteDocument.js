const { ObjectId } = require('mongodb');
const connection = require('./connection');

const deleteDocument = async (id, collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    return db.deleteOne(
      { _id: ObjectId(id) },
      );
  } catch (error) {
    console.log(error.message);
    return {
      err: {
        code: 'invalid_data',
        message: 'Wrong id format',
      },
    };
  }
};

module.exports = deleteDocument;
