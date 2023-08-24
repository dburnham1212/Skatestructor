const db = require('../../configs/db.config');

const getUserById = async (id) => {
  try {
    const data = await db.query('SELECT * FROM users WHERE id = $1', [id]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserByUserName = async (userName) => {
  try {
    const data = await db.query('SELECT * FROM users WHERE user_name = $1', [userName]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
};

const getUserByUserNameOrEmail = async (userName, email) => {
  try {
    const data = await db.query('SELECT * FROM users WHERE user_name = $1 OR email = $2', [userName, email]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

const createUser = async (user) => {
  try {
    const data = await db.query('INSERT INTO users(user_name, email, password) VALUES ($1, $2, $3) RETURNING *', [user.userName, user.email, user.password]);
    return data.rows[0];
  } catch (error) {
    throw error;
  }
}

module.exports = { getUserById, getUserByUserName, getUserByUserNameOrEmail, createUser };