// Archivo: models/user.js

const { DataTypes } = require("sequelize");
const sequelize = require("../util/database");

const User = sequelize.define("User", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor_coseno: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  // Agrega más campos según tu estructura de base de datos
});

module.exports = User;
