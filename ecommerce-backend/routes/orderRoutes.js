const express = require('express');
const router = express.Router();

// Example route to get all orders
router.get('/', (req, res) => {
  res.json([
    { id: 1, userId: 1, productId: 1, quantity: 2 },
    { id: 2, userId: 2, productId: 2, quantity: 1 }
  ]);
});

// Example route to get an order by ID
router.get('/:id', (req, res) => {
  const orderId = req.params.id;
  res.json({ id: orderId, userId: 1, productId: 1, quantity: 2 });
});

module.exports = router;
