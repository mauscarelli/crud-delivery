/* eslint-disable require-jsdoc */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('usuario', (table) => {
    table.increments('id');
    table.text('username').unique().notNullable();
    table.text('password').notNullable();
    table.string('telefone', 11).notNullable();
    table.text('nomeCompleto').notNullable();
    table.string('cpf', 12).unique().notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('usuario');
}
