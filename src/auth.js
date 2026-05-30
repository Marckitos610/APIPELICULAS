const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta_super_segura'; // En producción, esto va en un .env

module.exports = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  // El formato suele ser "Bearer <TOKEN>"
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ error: 'Token no proporcionado' });
  }

  jwt.verify(token, SECRET_KEY, (err, user) => {
    if (err) return res.status(403).json({ error: 'Token inválido o expirado' });
    req.user = user; // Guardamos los datos del usuario en la petición
    next();
  });
};