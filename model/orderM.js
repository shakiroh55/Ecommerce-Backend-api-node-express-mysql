const pool = require('../connect');
const { SqlObject } = require('./sql');

const createOrder = async (userId, total) => {
  return pool.query(SqlObject.createOrder, [userId, total]);
};

const addOrderItem = async (orderId, productId, quantity) => {
  return pool.query(SqlObject.addOrderItem, [orderId, productId, quantity]);
};

const getOrdersByUser = async (userId) => {
  return pool.query(SqlObject.getOrdersByUser, [userId]);
};

module.exports = { createOrder, addOrderItem, getOrdersByUser };
