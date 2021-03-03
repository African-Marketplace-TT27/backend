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
          price: '6.0',
          inventory: '50',
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 1,
          type_id: 1,
          unit_id: 1,
        },
        {
          prod_name: 'Organic meat',
          prod_desc: 'Best meat on earth',
          price: '6.0',
          inventory: '50',
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 2,
          type_id: 2,
          unit_id: 2,
        },
        {
          prod_name: 'InOrganic Eggs',
          prod_desc: 'Best inEggs on earth',
          price: '6.0',
          inventory: '50',
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 3,
          type_id: 3,
          unit_id: 3,
        },
        {
          prod_name: 'Eggs',
          prod_desc: 'Best eggs on earth',
          price: '6.0',
          inventory: '50',
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 4,
          type_id: 4,
          unit_id: 4,
        },
        {
          prod_name: 'Organic',
          prod_desc: 'Best eggs on earth',
          price: '6.0',
          inventory: '50',
          image:
            'https://images.unsplash.com/photo-1571265430516-b8f8bb8c5ae7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
          category_id: 1,
          type_id: 1,
          unit_id: 1,
        },
      ]);
    });
};
