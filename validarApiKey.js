module.exports = (req, res, next) => {
  const key = req.headers['x-api-key'];
  if (key === '123456') return next();
  res.status(403).json({ error: 'API Key no válida' });
};