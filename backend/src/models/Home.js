const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');

const Home = sequelize.define('Home', {
  street_address: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  state: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  zip: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  sqft: {
    type: DataTypes.DECIMAL(10, 2),
    allowNull: false,
  },
  beds: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  baths: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  list_price: {
    type: DataTypes.DECIMAL(15, 2),
    allowNull: false,
  },
}, {
  tableName: 'home', // Match the actual table name
  timestamps: false,  // Disable timestamps
});

module.exports = Home;