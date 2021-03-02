exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('products')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('products').insert([
        {
          prod_name: 'Organic Eggs',
          prod_desc: 'Best eggs on earth',
          price: 6.0,
          inventory: 50,
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 1,
          type_id: 1,
          unit_id: 1,
        },
      ]);
    });
};
