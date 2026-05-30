const jwt = require('jsonwebtoken');
const SECRET_KEY = 'mi_clave_secreta_super_segura';

class AuthService {
  login(username, password) {
    
    if (username === 'admin' && password === '1234') {
      const payload = { user: username, role: 'admin' };
      // Genera un token que expira en 1 hora
      return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    }
    return null;
  }
}

module.exports = new AuthService();