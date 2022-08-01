'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Products extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Products.belongsTo(models.Users, {
        foreignKey: 'user_id'
      });
    }
  }
  Products.init({
    user_id: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    category: DataTypes.STRING,
    picture: DataTypes.ARRAY(DataTypes.STRING),
    isPublish: DataTypes.BOOLEAN,
    isSold: DataTypes.BOOLEAN,
  }, {
    sequelize,
    modelName: 'Products',
  });
  return Products;
};