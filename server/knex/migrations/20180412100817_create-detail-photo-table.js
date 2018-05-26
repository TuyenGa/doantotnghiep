
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('detail_photos', (table) => {
      table.increments().primary();
      table.integer('detail_id', 3).references('id').inTable('detail').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.integer('photo_id', 3).references('id').inTable('photos').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};
exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('detail_photos');
};
