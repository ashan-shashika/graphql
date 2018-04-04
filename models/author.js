'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    firstName: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  author.associate = function(models) {
    models.author.hasMany(models.blog)
  };
  return author;
};
