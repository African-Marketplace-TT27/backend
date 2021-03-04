exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('types')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {
          type_name: 'Eggs',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Milk',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Honey',
          suggested_market_price: '1.00',
        },
        {
          type_name: 'Fish',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Beef',
          suggested_market_price: '5.00',
        },
        {
          type_name: 'Goat',
          suggested_market_price: '4.00',
        },
        {
          type_name: 'Pork',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Poultry',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Beans',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Maize',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Barley',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Millet',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Sorghum',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Wheat',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Rice',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Avocado',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Banana',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Passion Fruit',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Lemon',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Lime',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Mango',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Pawpaw',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Pineapple',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Coffee',
          suggested_market_price: '5.00',
        },
        {
          type_name: 'Tea',
          suggested_market_price: '5.00',
        },
        {
          type_name: 'Cotton',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Tobacco',
          suggested_market_price: '10.00',
        },
        {
          type_name: 'Vanilla',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Peas',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Cassava',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Potato',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Brinjal/Eggplant',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Cabbage',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Capsicum',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Carrot',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Cauliflower',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Chillies',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Cucumber',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Ginger',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Lettuce',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Onion',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Tomato',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Nuts-Ground',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Simsim',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Sunflower Seeds',
          suggested_market_price: '3.00',
        },
        {
          type_name: 'Sunflower Seed Cake',
          suggested_market_price: '5.00',
        },
      ]);
    });
};
