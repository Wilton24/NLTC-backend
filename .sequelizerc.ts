import path from 'path';

interface Paths {
  config: string;
  modelsPath: string;
  seedersPath: string;
  migrationsPath: string;
}

const paths: Paths = {
  config: path.resolve('database', 'config', 'config.js'),
  modelsPath: path.resolve('src', 'models'),
  seedersPath: path.resolve('database', 'seeders'),
  migrationsPath: path.resolve('database', 'migrations')
};


export default paths