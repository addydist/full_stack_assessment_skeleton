const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');// adjust the path accordingly
const User = require('./User');
const Home = require('./Home');
// const { DataTypes } = require('sequelize');
// const sequelize = require('../config/connection'); // adjust the path accordingly
// const User = require('./user');
// const Home = require('./home');

const UserHome = sequelize.define('UserHome', {
  userId: {
    type: DataTypes.INTEGER,
    references: {
      model: User,
      key: 'id',
    },
  },
  homeId: {
    type: DataTypes.INTEGER,
    references: {
      model: Home,
      key: 'id',
    },
  },
},{
  tableName: 'user_home_rl', // Match the actual table name
  timestamps: false,          // Disable timestamps
});

User.belongsToMany(Home, { through: UserHome });
Home.belongsToMany(User, { through: UserHome });

module.exports = UserHome;