
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('categories').del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          "type": 1,
          "name": "Rent"
        }, {
          "type": 2,
          "name": "Share"
        }, {
          "type": 3,
          "name": "Buy"
        }
      ]);
    });
};
