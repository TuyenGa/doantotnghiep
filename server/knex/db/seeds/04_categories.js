
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
          "name": "Share Room"
        }, {
          "type": 3,
          "name": "My Home for rent"
        }
    ]);
    });
};
