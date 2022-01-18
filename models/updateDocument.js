const { ObjectId } = require('mongodb');
const connection = require('./connection');

const updateDocument = async (id, entries, collection) => {
  try {
    const conn = await connection();
    const db = await conn.collection(collection);
    return db.updateOne(
      { _id: ObjectId(id) },
      { $set: entries },
      );
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = updateDocument;
