const express = require('express');
const router = express.Router();
const authService = require('../services/auth.service');

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const token = authService.login(username, password);

  if (token) {
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Credenciales incorrectas' });
  }
});

module.exports = router;