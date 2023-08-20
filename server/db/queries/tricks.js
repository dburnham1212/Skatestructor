const db = require('../../configs/db.config');

const getAllTricks = async () => {
  try {
    const data = await db.query('SELECT * FROM tricks');
    return data.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllTricks };