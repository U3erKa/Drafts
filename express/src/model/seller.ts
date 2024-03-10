'use strict';
import { Model, DataTypes } from 'sequelize';
export default (/** @type {import('sequelize').Sequelize} */ sequelize) => {
  class Seller extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {{ Car: import("sequelize").ModelStatic<Model<any, any>>; }} models
     */
    static associate(models) {
      // define association here
      Seller.belongsToMany(models.Car, {
        through: 'cars_to_sellers',
        foreignKey: 'sellerId',
      });
    }
  }
  Seller.init(
    {
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      address: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
      phone: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: 'Seller',
      tableName: 'sellers',
      underscored: true,
    },
  );
  return Seller;
};
