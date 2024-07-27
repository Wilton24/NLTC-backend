import { Model, DataTypes } from 'sequelize';
import dbConnection from '../db/config';

class Admin extends Model {
  declare id: number;
  declare name: string;
  declare email: string;
  declare password: string;
}

Admin.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  sequelize: dbConnection,
  modelName: 'Admin',
  tableName: 'admins',
});

export default Admin;
