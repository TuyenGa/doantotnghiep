
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('detail', (table) => {
      table.increments().primary();
      table.integer('price').notNullable();
      table.boolean('for_sale').notNullable();
      table.integer('sale');
      table.text('description').notNullable();
      table.string('address').notNullable();
      table.string('time_range').default('6 months').notNullable();
      table.integer('user_id', 3).references('id').inTable('users').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.integer('location_id', 3).references('id').inTable('locations').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.integer('feature_id', 3).references('id').inTable('features').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('detail');
};
