
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('locations', (table) => {
      table.increments().primary();
      table.float('latitude', [6], [7]).notNullable();
      table.float('longitude', [6], [7]).notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('locations');
};
