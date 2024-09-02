const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
// const sequelize = require('../config/connection'); // adjust the path accordingly

const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
  },
},{
  tableName: 'user', // Match the actual table name
  timestamps: false,  // Disable timestamps
});

module.exports = User;
