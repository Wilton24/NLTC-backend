import { Model, DataTypes } from 'sequelize';
import dbConnection from '../db/config';

class Player extends Model {
  declare id: number;
  declare name: string;
  declare age: number;
  declare sex: string;
  declare contact_number: string;
  declare email: string;
  declare profile_pic?: string; // Optional field
  declare createdAt: Date;
  declare updatedAt: Date;
}

Player.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  sex: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  contact_number: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  profile_pic: {
    type: DataTypes.STRING(255), // Adjust length as needed
    allowNull: true,
  },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW, // Automatically updated
  },
}, {
  sequelize: dbConnection,
  modelName: 'Player',
  tableName: 'players',
  timestamps: true, // Use Sequelize's default timestamps management
});

export default Player;
