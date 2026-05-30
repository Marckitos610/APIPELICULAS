const express = require('express');
const sequelize = require('./db');
const peliRoutes = require('./routes/peliculas.routes');
const authRoutes = require('./routes/auth.routes'); 
const logger = require('./middlewares/logger');
const authMiddleware = require('./middlewares/auth'); 

const app = express();
app.use(express.json());
app.use(logger);


app.use('/auth', authRoutes);


app.use('/peliculas', authMiddleware, peliRoutes);

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('API con JWT lista en http://localhost:3000'));
});