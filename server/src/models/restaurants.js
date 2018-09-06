'use strict';
module.exports = (sequelize, DataTypes) => {
  var Restaurants = sequelize.define('Restaurants', {
    name: DataTypes.STRING,
    category: DataTypes.STRING,
    address: DataTypes.STRING,
    breakfast: DataTypes.BOOLEAN,
    brunch: DataTypes.BOOLEAN,
    lunch: DataTypes.BOOLEAN,
    dinner: DataTypes.BOOLEAN
  }, {});
  Restaurants.associate = function(models) {
    // associations can be defined here
  };
  return Restaurants;
};