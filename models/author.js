'use strict';
module.exports = (sequelize, DataTypes) => {
  var author = sequelize.define('author', {
    firstName: DataTypes.STRING
  }, {});
  author.associate = function(models) {
    models.author.hasMany(models.blog)
  };
  return author;
};
