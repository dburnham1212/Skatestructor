const db = require('../../configs/db.config');

const getAllTricks = async () => {
  try {
    const data = await db.query('SELECT * FROM tricks');
    return data.rows;
  } catch (error) {
    throw error;
  }
};

const getTrickById = async (id) => {
  try {
    const data = await db.query('SELECT * FROM tricks WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getAllTricks, getTrickById };