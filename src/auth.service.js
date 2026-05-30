import jwt from 'jsonwebtoken';

const SECRET_KEY = process.env.JWT_SECRET || 'mi_clave_secreta_super_segura';

class AuthService {
  login(username, password) {
    if (username === 'admin' && password === '1234') {
      const payload = { user: username, role: 'admin' };
      return jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });
    }
    return null;
  }
}

export default new AuthService();