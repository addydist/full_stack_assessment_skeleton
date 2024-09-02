const User = require("./User");
const Home = require("./Home");
const UserHome = require("./UserHome");

User.belongsToMany(Home, { through: UserHome, foreignKey: "user_id" });
Home.belongsToMany(User, { through: UserHome, foreignKey: "home_id" });

module.exports = {
  User,
  Home,
  UserHome,
  sequelize: require("../config/config"),
};
