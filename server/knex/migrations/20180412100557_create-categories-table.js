
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('categories', (table) => {
      table.increments().primary()
      table.specificType('type', 'char(80)').unique().notNullable()
      table.specificType('name', 'char(100)').notNullable()
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('categories')
};