const { ObjectId } = require('mongodb');
const connection = require('./connection');

const getDocumentById = async (id, collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    const [product] = await db.find({ _id: ObjectId(id) }).toArray();
    return product;
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

module.exports = getDocumentById;
