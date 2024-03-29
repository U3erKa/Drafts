'use strict';
import { Model, DataTypes } from 'sequelize';
export default (/** @type {import('sequelize').Sequelize} */ sequelize) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     * @param {{ Car: import("sequelize").ModelStatic<Model<any, any>>; }} models
     */
    static associate(models) {
      // define association here
      Review.belongsTo(models.Car, {
        foreignKey: 'carId',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE',
      });
    }
  }
  Review.init(
    {
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: { notNull: true, notEmpty: true },
      },
      body: {
        allowNull: false,
        type: DataTypes.TEXT,
        validate: { notNull: true, notEmpty: true },
      },
      rating: {
        allowNull: false,
        type: DataTypes.DECIMAL(3, 1),
        validate: {
          notNull: true,
          notEmpty: true,
          isDecimal: true,
          min: 1,
          max: 10,
        },
      },
    },
    {
      sequelize,
      modelName: 'Review',
      tableName: 'reviews',
      underscored: true,
    },
  );
  return Review;
};
