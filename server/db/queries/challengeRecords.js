const db = require('../../configs/db.config');

const getChallengeRecordByChallengeId = async (id) => {
  try {
    const data = await db.query('SELECT * FROM challenge_records WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

const getChallengeRecordByChallengeAndUserId = async (userId, challengeId) => {
  try {
    const data = await db.query('SELECT * FROM challenge_records WHERE user_id = $1 AND challenge_id = $2', [userId, challengeId]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

const createRecord = async (userId, challngeId) => {
  try {
    const data = await db.query('INSERT INTO challenge_records(user_id, challenge_id) VALUES ($1, $2) RETURNING *', [userId, challngeId]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
} 


module.exports = { getChallengeRecordByChallengeId, getChallengeRecordByChallengeAndUserId, createRecord };