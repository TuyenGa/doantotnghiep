
exports.up = function(knex, Promise) {
  return knex.schema
    .withSchema('public')
    .createTable('resume', function (table) {
      table.increments().primary()
      table.boolean('smoking')
      table.integer('pets').notNullable().defaultTo(0);
      table.integer('income')
      table.integer('tenants') // số thành viên được thuê
      table.string('employer', [200])
      table.string('job_type', [200])
      table.timestamp('created_at').defaultTo(knex.fn.now())
      table.timestamp('updated_at').defaultTo(knex.fn.now())
    })
};

exports.down = function(knex, Promise) {
  return knex.schema
    .dropTableIfExists('resume')
};
