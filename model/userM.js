const pool = require('../connect');
const { SqlObject } = require('../model/sql');

const createUser = async (name, email, password) => {
  return pool.query(SqlObject.createUser, [name, email, password]);
};

const findUserByEmail = async (email) => {
  return pool.query(SqlObject.findUserByEmail, [email]);
};

module.exports = { createUser, findUserByEmail };
