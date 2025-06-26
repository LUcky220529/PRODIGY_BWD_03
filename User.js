const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/database');

const User = sequelize.define('User', {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true
  },
  name: DataTypes.STRING,
  email: {
    type: DataTypes.STRING,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: DataTypes.STRING,
  age: DataTypes.INTEGER,
  role: {
    type: DataTypes.STRING,
    defaultValue: 'user'
  }
});

module.exports = User;
