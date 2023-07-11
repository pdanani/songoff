import { DataTypes, Model } from 'sequelize';
import sequelize from '../database';

class Vote extends Model {}

Vote.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    songId: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'vote',
    timestamps: false,
  }
);

export default Vote;
