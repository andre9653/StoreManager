const connection = require('./connection');

const getCollection = async (collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    const product = await db.find().toArray();
    return product;
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = getCollection;
