// routes/cart.js
const express = require('express');
const router = express.Router();
const Cart = require('../Module/Cart');

// Get cart
router.get('/', async (req, res) => {
    try {
        const cart = await Cart.findOne();
        res.json(cart);
    } catch (err) {
        res.status(500).send(err);
    }
});

// Add to cart
router.post('/add', async (req, res) => {
    const { productId, quantity } = req.body;
    console.log("ProductBody",req.body);
     try{
     let ProductCart = await Cart.create({productId, quantity});
     console.log("ProductCart",ProductCart);
    const cart =  Cart.findOne();
    console.log("cart-data",Cart);
    const productIndex = cart.products.findIndex(p => p.productId == productId);
    console.log("Productindex-data",productIndex);
    if (productIndex > -1) {
        cart.products[productIndex].quantity += quantity;
    } else {
        cart.products.push({ productId, quantity });
    }
    await cart.save();
    res.json(cart);
    console.log(cart);
   }catch(error){
    res.status(500).send(error);
   }
});

// Update cart quantity
router.post('/update', async (req, res) => {
    const { productId, quantity } = req.body;
    const cart = await Cart.findOne();
    const productIndex = cart.products.findIndex(p => p.productId == productId);
    if (productIndex > -1) {
        cart.products[productIndex].quantity = quantity;
        await cart.save();
        res.json(cart);
     
    } else {
        res.status(404).send('Product not found in cart');
    }
});

module.exports = router;
