const express = require('express');
const router = express.Router();

// Example route to get all users
router.get('/', (req, res) => {
  res.json([
    { id: 1, username: 'user1', email: 'user1@example.com' },
    { id: 2, username: 'user2', email: 'user2@example.com' }
  ]);
});

// Example route to get a user by ID
router.get('/:id', (req, res) => {
  const userId = req.params.id;
  res.json({ id: userId, username: `user${userId}`, email: `user${userId}@example.com` });
});

module.exports = router;
