exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('countries')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('countries').insert([
        {
          country_name: 'Kenya',
        },
        {
          country_name: 'Uganda',
        },
        {
          country_name: 'Tanzania',
        },
        {
          country_name: 'Rwanda',
        },
        {
          country_name: 'South Sudan',
        },
        {
          country_name: 'Burudni',
        },
        {
          country_name: 'Democratic Republic of Congo (DRC)',
        },
      ]);
    });
};
