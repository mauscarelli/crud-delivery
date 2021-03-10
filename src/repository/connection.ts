import { Knex } from 'knex';
const knexConfig = require('./../../knexfile');
require('dotenv').config();

const knex: Knex = require('knex')(
  knexConfig[process.env.NODE_ENV === 'test' ? 'test' : 'development']
);

export = knex;
