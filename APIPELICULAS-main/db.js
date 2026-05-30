const { Sequelize } = require('sequelize');
const sqlite3 = require('sqlite3-offline'); // <--- Importamos la versión offline

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database.sqlite',
  dialectModule: sqlite3, // <--- ¡Esta es la clave para Render!
  logging: false
});

module.exports = sequelize;