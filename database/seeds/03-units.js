exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('units')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('units').insert([
        {
          unit_name: 'dozen',
        },
        {
          unit_name: 'gallon',
        },
        {
          unit_name: 'ounce',
        },
        {
          unit_name: 'pound',
        },
      ]);
    });
};
