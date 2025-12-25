const pool = require('../connect');
const { SqlObject } = require('./sql');

const createProduct = async (name, price) => {
  return pool.query(SqlObject.createProduct, [name, price]);
};

const listProducts = async () => {
  return pool.query(SqlObject.listProducts);
};

module.exports = { createProduct, listProducts };
