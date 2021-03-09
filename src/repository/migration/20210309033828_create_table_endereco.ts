/* eslint-disable require-jsdoc */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('endereco', (table) => {
    table.increments('id');
    table.string('cep', 8).notNullable();
    table.string('uf').notNullable();
    table.text('cidade').notNullable();
    table.text('rua').notNullable();
    table.integer('numero');
    table.text('complemento');
    table.integer('user_id').unsigned().notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('usuario.id').onDelete('CASCADE');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('endereco');
}
