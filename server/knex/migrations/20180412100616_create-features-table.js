
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('features', (table) => {
      table.increments().primary();
      table.integer('bed_room').notNullable();
      table.integer('baths_room').notNullable();
      table.boolean('coop').notNullable();
      table.boolean('additional_storage').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('features')
};
