exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {
          type_name: 'Eggs',
        },
        {
          type_name: 'Milk',
        },
        {
          type_name: 'Honey',
        },
        {
          type_name: 'Fish',
        },
        {
          type_name: 'Beef',
        },
        {
          type_name: 'Goat',
        },
        {
          type_name: 'Pork',
        },
        {
          type_name: 'Poultry',
        },
        {
          type_name: 'Beans',
        },
        {
          type_name: 'Maize',
        },
        {
          type_name: 'Barley',
        },
        {
          type_name: 'Millet',
        },
        {
          type_name: 'Sorghum',
        },
        {
          type_name: 'Wheat',
        },
        {
          type_name: 'Rice',
        },
        {
          type_name: 'Avocado',
        },
        {
          type_name: 'Banana',
        },
        {
          type_name: 'Passion Fruit',
        },
        {
          type_name: 'Lemon',
        },
        {
          type_name: 'Lime',
        },
        {
          type_name: 'Mango',
        },
        {
          type_name: 'Pawpaw',
        },
        {
          type_name: 'Pineapple',
        },
        {
          type_name: 'Coffee',
        },
        {
          type_name: 'Tea',
        },
        {
          type_name: 'Cotton',
        },
        {
          type_name: 'Vanilla',
        },
        {
          type_name: 'Peas',
        },
        {
          type_name: 'Cassava',
        },
        {
          type_name: 'Potato',
        },
        {
          type_name: 'Brinjal/Eggplant',
        },
        {
          type_name: 'Cabbage',
        },
        {
          type_name: 'Capsicum',
        },
        {
          type_name: 'Carrot',
        },
        {
          type_name: 'Cauliflower',
        },
        {
          type_name: 'Chillies',
        },
        {
          type_name: 'Cucumber',
        },
        {
          type_name: 'Ginger',
        },
        {
          type_name: 'Lettuce',
        },
        {
          type_name: 'Onion',
        },
        {
          type_name: 'Tomato',
        },
        {
          type_name: 'Nuts-Ground',
        },
        {
          type_name: 'Simsim',
        },
        {
          type_name: 'Sunflower Seeds',
        },
        {
          type_name: 'Sunflower Seed Cake',
        },
      ]);
    });
};
