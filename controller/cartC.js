const cartModel = require('../model/cartM');

async function addToCart (req, res) {
  try {
    const { product_id, quantity } = req.body;
  await cartModel.addToCart(req.user.id, product_id, quantity);
  res.json({ message: 'Added to cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

async function getCart (req, res){
  try {
    const [cart] = await cartModel.getCartByUser(req.user.id);
  res.json(cart);
  } catch (error) {
    res.status(500).json({ message: error.message });
    
  }
};

async function removeFromCart(req, res)  {
  try {
    const { cart_id } = req.params;
  await cartModel.removeFromCart(cart_id);
  res.json({ message: 'Removed from cart' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addToCart, getCart, removeFromCart };