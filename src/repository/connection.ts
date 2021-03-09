import { Knex } from 'knex';

const knexConfig = require('knexfile');

const knex: Knex = require('knex')(knexConfig['development']);

export = knex;
