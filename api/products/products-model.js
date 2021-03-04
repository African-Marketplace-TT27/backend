const db = require('../../database/dbConfig');

module.exports = {
  find() {
    return db('products as p')
      .leftJoin('categories as c', 'p.category_id', 'c.category_id')
      .leftJoin('types as t', 'p.type_id', 't.type_id')
      .leftJoin('units as u', 'p.unit_id', 'u.unit_id')
      .select(
        'p.prod_id',
        'p.prod_name',
        'p.prod_desc',
        'p.price',
        'p.inventory',
        'p.image',
        'p.category_id',
        'c.category_name',
        'p.type_id',
        't.type_name',
        'p.unit_id',
        'u.unit_name'
      );
  },

  findById(id) {
    return db('products as p')
      .leftJoin('categories as c', 'p.category_id', 'c.category_id')
      .leftJoin('types as t', 'p.type_id', 't.type_id')
      .leftJoin('units as u', 'p.unit_id', 'u.unit_id')
      .select(
        'p.prod_id',
        'p.prod_name',
        'p.prod_desc',
        'p.price',
        'p.inventory',
        'p.image',
        'p.category_id',
        'c.category_name',
        'p.type_id',
        't.type_name',
        'p.unit_id',
        'u.unit_name'
      )
      .where('p.prod_id', id)
      .first();
  },

  update(changes, id) {
    const productsId = id;
    return db('products')
      .where('prod_id', id)
      .update(changes)
      .then(() => {
        return db('products').where('prod_id', productsId).first();
      });
  },

  remove(id) {
    return db('products')
      .where('prod_id', id)
      .del()
      .then(() => {
        return db('products');
      });
  },

  add(product) {
    return db('products')
      .insert(product, 'prod_id')
      .then(([id]) => {
        return db('products').where('prod_id', id).first();
      });
  },
};
