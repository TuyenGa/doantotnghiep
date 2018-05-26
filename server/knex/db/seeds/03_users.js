
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          email: 'vuongquangtuyendz@gmail.com',
          password: 'anhtuyen9x',
          name: 'Vuong quang tuyen',
          address: 'Ha Noi',
          phone: '0962412148',
          salt: '23sdc4g',
          resume_id: 3
        },
      ]);
    });
};
