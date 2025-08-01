const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');

const User = sequelize.define('User', {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  phone: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  address: {
    type: DataTypes.STRING,
    allowNull: true, //  Address is optional
  },
  passion: {
    type: DataTypes.STRING,
    allowNull: true, //  Address is optional
  },
  salary: {
    type: DataTypes.STRING,
    allowNull: true, //  Address is optional
  }
});

module.exports = User;

