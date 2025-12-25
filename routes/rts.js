const express = require('express');
const router = express.Router();
const authController = require('../controller/userAuthC');
const productController = require('../controller/productC');
const cartController = require('../controller/cartC');
const orderController = require('../controller/orderC');
const auth = require('../middlewares/authmiddleware');


//auth routes
router.post('/register', authController.register);
router.post('/login', authController.login);


// //product routes
// router.post('/', productController.createProduct);
// router.get('/', productController.listProducts);


// //cart routes
// router.post('/', auth, cartController.addToCart);
// router.get('/', auth, cartController.getCart);
// router.delete('/:cart_id', auth, cartController.removeFromCart);

// //order routes
// router.post('/', auth, orderController.placeOrder);
// router.get('/', auth, orderController.getOrders);

module.exports = router;
