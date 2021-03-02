exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('categories')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('categories').insert([
        {
          category_name: 'Animal Product',
        },
        {
          category_name: 'Grain/Bean',
        },
        {
          category_name: 'Fruit',
        },
        {
          category_name: 'Vegetable',
        },
        {
          category_name: 'Seed/Nut',
        },
        {
          category_name: 'Other',
        },
      ]);
    });
};
