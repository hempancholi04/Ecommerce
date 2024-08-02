const express = require('express');
const router = express.Router();

// Example route to get all products
router.get('/', (req, res) => {
  res.json([
    { id: 1, name: 'Product 1', price: 100 },
    { id: 2, name: 'Product 2', price: 150 }
  ]);
});

// Example route to get a product by ID
router.get('/:id', (req, res) => {
  const productId = req.params.id;
  res.json({ id: productId, name: `Product ${productId}`, price: 100 + parseInt(productId) });
});

module.exports = router;
