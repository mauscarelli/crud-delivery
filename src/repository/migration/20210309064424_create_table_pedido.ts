/* eslint-disable require-jsdoc */
import { Knex } from 'knex';

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable('pedido', (table) => {
    table.increments('id');
    table.text('detalhePedido').notNullable();
    table.text('descricao');
    table.decimal('total').notNullable();
    table.integer('user_id').unsigned().notNullable();
    table.integer('endereco_id').unsigned().notNullable();

    table.timestamp('created_at').defaultTo(knex.fn.now());
    table.timestamp('updated_at').defaultTo(knex.fn.now());

    table.foreign('user_id').references('usuario.id').onDelete('CASCADE');
    table.foreign('endereco_id').references('endereco.id');
  });
}

export async function down(knex: Knex): Promise<void> {
  return knex.schema.dropTable('pedido');
}
