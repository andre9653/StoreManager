const connection = require('./connection');

const insertManyInCollection = async (document, collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    return db.insertMany(document);
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = insertManyInCollection;
