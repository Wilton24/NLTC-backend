module.exports = {
  development: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  test: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mariadb',
  },
  production: {
    username: 'root',
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: '127.0.0.1',
    dialect: 'mariadb',
  }
};
