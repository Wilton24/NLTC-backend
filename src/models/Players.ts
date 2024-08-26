import { Model, DataTypes, Optional } from 'sequelize';
import dbConnection from '../db/config';

interface PlayerAttributes {
  id: number;
  name: string;
  age: number;
  sex: string; 
  contactNumber: string;
  email: string;
  // profilePic: string | null;
  createdAt: Date;
  updatedAt: Date;
}

interface PlayerCreationAttributes extends Optional<PlayerAttributes, 'id' | 'createdAt' | 'updatedAt'> {}

export class Player extends Model<PlayerAttributes, PlayerCreationAttributes> implements PlayerAttributes {
  public id!: number;
  public name!: string;
  public age!: number;
  public sex!: string;
  public contactNumber!: string;
  public email!: string;
  // public profilePic!: string | null;
  public createdAt!: Date;
  public updatedAt!: Date;
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
  contactNumber: {
    type: DataTypes.STRING(20),
    allowNull: false,
    unique: true,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  // profilePic: {
  //   type: DataTypes.STRING,
  //   allowNull: true,
  // },
  createdAt: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
  },
  updatedAt: {
    type: DataTypes.DATE,
    allowNull: false,
    onUpdate: 'CURRENT_TIMESTAMP',
  },
},
  {
    sequelize: dbConnection,
    modelName: 'Players',
    tableName: 'Players',
  }
)

export default Player;