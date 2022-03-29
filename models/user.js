'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  User.init({
    firstName:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    lastName:{
      type:DataTypes.STRING,
      allowNull: false,
    },
    email:{
      type: DataTypes.STRING,
      validate: {
        isEmail:true
      }
    },
    password:{
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric:true
      }
    },
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};