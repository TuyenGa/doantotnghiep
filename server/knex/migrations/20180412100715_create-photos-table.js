
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('photos', (table) => {
      table.increments().primary();
      table.string('path').notNullable();
      table.string('name').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('photos');
};
