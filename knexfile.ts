// Update with your config settings.
require('ts-node/register');
require('dotenv').config();

module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.MYSQL_URL,
      database: process.env.DATABASE_NAME,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/repository/migration`,
    },
  },
  test: {
    client: 'sqlite3',
    connection: {
      filename: `${__dirname}/tests/test.sqlite`,
    },
    migrations: {
      directory: `${__dirname}/src/repository/migration`,
    },
    useNullAsDefault: true,
  },
};
