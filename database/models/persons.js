'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Persons extends Model {
    static associate(models) {
      Persons.belongsTo(models.Addresses)
    }
  };
  Persons.init({
    rut: DataTypes.STRING,
    name: DataTypes.STRING,
    phone: DataTypes.STRING,
    mail:DataTypes.STRING,
    gender: DataTypes.STRING,
    born: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Persons',
    underscored: true
    
  });
  return Persons;
};