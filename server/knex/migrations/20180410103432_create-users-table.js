
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('users', function (table) {
      table.increments().primary();
      table.specificType('email','char(80)').unique().notNullable();
      table.specificType('password','char(60)').notNullable();
      table.string('name', [200]).notNullable();
      table.string('address', [200]).notNullable();
      table.string('phone', [16]).notNullable();
      table.string('salt', [80]).notNullable();
      table.integer('resume_id').unsigned().references('id').inTable('resume').onDelete('CASCADE').onUpdate('CASCADE').notNullable();
      table.timestamp('created_at').defaultTo(knex.fn.now());
      table.timestamp('updated_at').defaultTo(knex.fn.now());
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('users')
};
