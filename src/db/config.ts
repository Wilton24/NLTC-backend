import { Sequelize } from 'sequelize';
interface DatabaseConfig {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  dialect: 'mariadb';
}

const config: DatabaseConfig = {
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '3306', 10),
  dialect: 'mariadb',
};

const dbConnection = new Sequelize(config);

export default dbConnection;
