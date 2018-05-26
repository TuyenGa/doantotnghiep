
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('detail_photos').del()
    .then(function () {
      // Inserts seed entries
      return knex('detail_photos').insert(
        [{
          "detail_id": 1,
          "photo_id": 1
        }, {
          "detail_id": 2,
          "photo_id": 2
        }, {
          "detail_id": 3,
          "photo_id": 3
        }, {
          "detail_id": 4,
          "photo_id": 4
        }, {
          "detail_id": 5,
          "photo_id": 5
        }, {
          "detail_id": 6,
          "photo_id": 6
        }, {
          "detail_id": 7,
          "photo_id": 7
        }, {
          "detail_id": 8,
          "photo_id": 8
        }, {
          "detail_id": 9,
          "photo_id": 9
        }, {
          "detail_id": 10,
          "photo_id": 10
        }, {
          "detail_id": 11,
          "photo_id": 11
        }, {
          "detail_id": 12,
          "photo_id": 12
        }, {
          "detail_id": 13,
          "photo_id": 13
        }, {
          "detail_id": 14,
          "photo_id": 14
        }, {
          "detail_id": 15,
          "photo_id": 15
        }, {
          "detail_id": 16,
          "photo_id": 16
        }, {
          "detail_id": 17,
          "photo_id": 17
        }, {
          "detail_id": 18,
          "photo_id": 18
        }, {
          "detail_id": 19,
          "photo_id": 19
        }, {
          "detail_id": 20,
          "photo_id": 20
        }, {
          "detail_id": 21,
          "photo_id": 21
        }, {
          "detail_id": 22,
          "photo_id": 22
        }, {
          "detail_id": 23,
          "photo_id": 23
        }, {
          "detail_id": 24,
          "photo_id": 24
        }, {
          "detail_id": 25,
          "photo_id": 25
        }, {
          "detail_id": 26,
          "photo_id": 26
        }, {
          "detail_id": 27,
          "photo_id": 27
        }, {
          "detail_id": 28,
          "photo_id": 28
        }, {
          "detail_id": 29,
          "photo_id": 29
        }, {
          "detail_id": 30,
          "photo_id": 30
        }, {
          "detail_id": 31,
          "photo_id": 31
        }, {
          "detail_id": 32,
          "photo_id": 32
        }, {
          "detail_id": 33,
          "photo_id": 33
        }, {
          "detail_id": 34,
          "photo_id": 34
        }]
      );
    });
};
