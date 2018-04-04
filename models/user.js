'use strict';
module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  user.associate = function(models) {
    // associations can be defined here
  };
  return user;
};
