'use strict';
import { Model, DataTypes } from 'sequelize';
export default (/** @type {import('sequelize').Sequelize} */ sequelize) => {
  class Car extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {{ Review: import("sequelize").ModelStatic<Model<any, any>>; Seller: import("sequelize").ModelStatic<Model<any, any>>; }} models
     */
    static associate(models) {
      // define association here
      Car.hasMany(models.Review, {
        foreignKey: 'carId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
        as: 'reviews',
      });
      Car.belongsToMany(models.Seller, {
        through: 'cars_to_sellers',
        foreignKey: 'carId',
        as: 'sellers',
      });
    }
  }
  Car.init(
    {
      model: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, isAlphanumeric: true, notEmpty: true },
      },
      manufacturer: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: { notNull: true, isAlpha: true, notEmpty: true },
      },
      modelYear: { type: DataTypes.INTEGER, validate: { isInt: true } },
      price: {
        type: DataTypes.DECIMAL,
        allowNull: false,
        validate: {
          notNull: true,
          isNumeric: true,
          notEmpty: true,
          isCorrectPrice(newPrice) {
            if (newPrice < 0) {
              throw new Error('Price cannot be this low');
            }
          },
        },
      },
      isUsed: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
        allowNull: false,
      },
      serialNumber: {
        type: DataTypes.STRING,
        unique: true,
        allowNull: false,
        validate: { notNull: true, isAlphanumeric: true, notEmpty: true },
      },
      picPath: {
        type: DataTypes.STRING,
        field: 'pic_path',
        validate: { notEmpty: true },
      },
    },
    {
      sequelize,
      modelName: 'Car',
      tableName: 'cars',
      underscored: true,
    },
  );
  return Car;
};
