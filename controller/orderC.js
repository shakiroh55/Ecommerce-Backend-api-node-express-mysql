const orderModel = require("../model/orderM");
const cartModel = require("../model/cartM");

async function placeOrder(req, res) {
  try {
    const [cart] = await cartModel.getCartByUser(req.user.id);
    if (cart.length === 0)
      return res.status(400).json({ message: "Cart is empty" });

    let total = 0;
    cart.forEach((item) => (total += item.price * item.quantity));

    const [orderResult] = await orderModel.createOrder(req.user.id, total);
    const orderId = orderResult.insertId;

    for (let item of cart) {
      await orderModel.addOrderItem(orderId, item.product_id, item.quantity);
    }

    res.json({ message: "Order placed", orderId });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

async function getOrders(req, res) {
  try {
    const [orders] = await orderModel.getOrdersByUser(req.user.id);
    res.json(orders);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = { placeOrder, getOrders };
