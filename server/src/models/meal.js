'use strict';
module.exports = (sequelize, DataTypes) => {
  var Meal = sequelize.define('Meal', {
    type: DataTypes.STRING
  }, {});
  Meal.associate = function(models) {
    // associations can be defined here
  };
  return Meal;
};