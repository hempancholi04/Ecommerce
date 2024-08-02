const express = require('express');
const Cart = require('../models/Cart');
const Product = require('../models/Product');

const router = express.Router();

// Add item to cart
router.post('/add', async (req, res) => {
  const { userId, productId, quantity } = req.body;
  const product = await Product.findById(productId);

  const cartItem = new Cart({
    userId,
    products: [{
      productId,
      quantity,
      price: product.price,
      productName: product.productName,
      description: product.description,
    }],
    total: product.price * quantity,
  });

  await cartItem.save();
  res.json(cartItem);
});

// Get cart items
router.get('/:userId', async (req, res) => {
  const cartItems = await Cart.find({ userId: req.params.userId });
  res.json(cartItems);
});

module.exports = router;
