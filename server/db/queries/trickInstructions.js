const db = require('../../configs/db.config');

const getAllInstructionsByTrick = async (id) => {
  try {
    const data = await db.query('SELECT * FROM trick_instructions WHERE trick_id = $1', [id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getAllInstructionsByTrick };