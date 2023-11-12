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
  tableName: 'users',
});

module.exports = User;
