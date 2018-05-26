
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('admins', (table) => {
      table.increments().primary()
      table.specificType('email', 'char(80)').unique().notNullable()
      table.specificType('password', 'char(60)').notNullable() // bcrypt
      table.specificType('salt', 'char(29)').notNullable()
      table.enum('roles', ['superadmin', 'admin']).defaultTo('admin')
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('admins')
};
