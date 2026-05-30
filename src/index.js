import express from 'express';
import sequelize from './db.js';           // ← necesitas la extensión .js en ESM
import peliculasRoutes from './peliculas.routes.js';
import authRoutes from './auth.routes.js';
import logger from './middlewares/logger.js';
import authMiddleware from './middlewares/auth.js';
import logger from './logger.js';

const app = express();
app.use(express.json());
app.use(logger);

app.use('/auth', authRoutes);
app.use('/peliculas', authMiddleware, peliculasRoutes); // ← nombre corregido

const PORT = process.env.PORT || 3000;

try {
    await sequelize.authenticate();
    console.log('Conexión con PostgreSQL establecida.');
    await sequelize.sync();
    app.listen(PORT, () => {
        console.log(`API con JWT lista en el puerto ${PORT}`);
    });
} catch (error) {
    console.error('Error al inicializar la base de datos:', error);
}