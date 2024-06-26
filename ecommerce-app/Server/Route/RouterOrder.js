// routes/orders.js
const express = require('express');
const router = express.Router();
const Order = require('../Module/Order');
const Cart = require('../Module/Cart');

// Get purchase history
router.get('/', async (req, res) => {
    const { startDate, endDate } = req.query;
    const orders = await Order.find({
        purchaseDate: {
            $gte: new Date(startDate),
            $lte: new Date(endDate)
        }
    });
    res.json(orders);
});

// Create order
router.post('/create', async (req, res) => {
    const cart = await Cart.findOne();
    const order = new Order({ products: cart.products });
    await order.save();
    // Clear the cart after purchase
    cart.products = [];
    await cart.save();
    res.json(order);
});

module.exports = router;
