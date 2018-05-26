
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('admins').del()
    .then(function () {
      // Inserts seed entries
      return knex('admins').insert([
        {
          email: 'vuongquangtuyendz@gmail.com',
          password: 'rowValue1',
          salt: 'sdeed'
        }
      ]);
    });
};
