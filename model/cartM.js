const pool = require('../connect');
const { SqlObject } = require('./sql');

const addToCart = async (userId, productId, quantity) => {
  return pool.query(SqlObject.addToCart, [userId, productId, quantity]);
};

const getCartByUser = async (userId) => {
  return pool.query(SqlObject.getCartByUser, [userId]);
};

const removeFromCart = async (cartId) => {
  return pool.query(SqlObject.removeFromCart, [cartId]);
};

module.exports = { addToCart, getCartByUser, removeFromCart };
