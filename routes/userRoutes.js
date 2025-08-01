const express = require('express');
const router = express.Router();
const User = require('../models/user');

// POST: Add new user
router.post('/', async (req, res) => {
  const { name, email , phone , address , passion , salary } = req.body;

  try {
    const user = await User.create({ name, email , phone , address , passion , salary });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
// GET all users
router.get('/', async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users); // returns all users as JSON
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});


module.exports = router;
