const express = require('express');
const sequelize = require('./db');
const peliculasRoutes = require('./peliculas.routes');
const authRoutes = require('./auth.routes');
const logger = require('./middlewares/logger');
const authMiddleware = require('./middlewares/auth'); 

const app = express();
app.use(express.json());
app.use(logger);


app.use('/auth', authRoutes);


app.use('/peliculas', authMiddleware, peliRoutes);

const PORT = process.env.PORT || 3000;

sequelize.sync().then(() => {
    app.listen(PORT, () => {
        console.log(`API con JWT lista en el puerto ${PORT}`);
    });
});