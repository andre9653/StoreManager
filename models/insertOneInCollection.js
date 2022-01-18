const connection = require('./connection');

const insertOneCollection = async (document, collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    return db.insertOne(document);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = insertOneCollection;
