import express from 'express';
import * as authService from './auth.service.js';

const router = express.Router();

router.post('/login', (req, res) => {
  const { username, password } = req.body;
  const token = authService.login(username, password);
  token
    ? res.json({ token })
    : res.status(401).json({ error: 'Credenciales incorrectas' });
});

export default router;