'use strict';
module.exports = (sequelize, DataTypes) => {
  var Categories = sequelize.define('Categories', {
    category: DataTypes.STRING
  }, {});
  Categories.associate = function(models) {
    // associations can be defined here
  };
  return Categories;
};