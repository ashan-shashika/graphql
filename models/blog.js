'use strict';
module.exports = (sequelize, DataTypes) => {
  var blog = sequelize.define('blog', {
    title: DataTypes.STRING,
    description: DataTypes.STRING,
    imageUrl: DataTypes.STRING,
    status: DataTypes.INTEGER
  }, {});
  blog.associate = function(models) {
    models.blog.belongsTo(models.author)
  };
  return blog;
};
