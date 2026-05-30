const { Sequelize } = require('sequelize');

// Pega aquí adentro el enlace largo que copiaste de Render
const sequelize = new Sequelize('postgresql://peliculas_db_6hua_user:EKxVD9WopNtrYHIpJMmmxYSgZ9EG11FH@dpg-d8d6m5740ujc73cbs15g-a.oregon-postgres.render.com/peliculas_db_6hua', {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false // Requerido obligatoriamente por Render
    }
  },
  logging: false
});

module.exports = sequelize;