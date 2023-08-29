const db = require('../../configs/db.config');

const getChallengeRecordByChallengeId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM challenge_records WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

module.exports = { getChallengeRecordByChallengeId };