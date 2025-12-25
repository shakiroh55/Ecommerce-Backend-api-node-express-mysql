//SQL sentences for MySQL.

const SqlObject = {
    // USER
    createUser: "INSERT INTO users_tb (name, email, password) VALUES (?, ?, ?)",
    findUserByEmail: "SELECT * FROM users_tb WHERE email = ?",

    // PRODUCTS
    createProduct: "INSERT INTO products_tb (product_name, price) VALUES (?, ?)",
    listProducts: "SELECT * FROM products_tb",

    // CART
    addToCart: "INSERT INTO cart_tb (user_id, product_id, quantity) VALUES (?, ?, ?)",
    getCartByUser: "SELECT cart_tb.id, products_tb.product_name, products_tb.price, cart_tb.quantity FROM cart_tb JOIN products_tb ON cart_tb.product_id = products_tb.id WHERE cart_tb.user_id = ?",
    removeFromCart: "DELETE FROM cart_tb WHERE id = ?",

    // ORDERS
    createOrder: "INSERT INTO orders_tb (user_id, total) VALUES (?, ?)",
    addOrderItem: "INSERT INTO order_items_tb (order_id, product_id, quantity) VALUES (?, ?, ?)",
    getOrdersByUser: "SELECT orders_tb.id, orders_tb.total, orders_tb.created_at, order_items_tb.product_id, products_tb.product_name, order_items_tb.quantityFROM orders_tbJOIN order_items_tb ON orders_tb.id = order_items_tb.order_idJOIN products_tb ON order_items_tb.product_id = products_tb.idWHERE orders_tb.user_id = ?"
   
};

module.exports = { SqlObject };

 

  
  