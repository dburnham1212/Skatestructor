const db = require('../../configs/db.config');

const getChallengeById = async (id) => {
  try {
    const data = await db.query('SELECT * FROM challenges WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

const getChallengesByTrickId = async (trick_id) => {
  try {
    const data = await db.query('SELECT * FROM challenges WHERE trick_id = $1', [trick_id]);
    return data.rows;
  } catch (error) {
    throw error;
  }
};

module.exports = { getChallengesByTrickId, getChallengeById };