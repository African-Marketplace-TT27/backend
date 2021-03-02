const db = require('../../database/dbConfig');

module.exports = {
  find() {
    return db('products');
  },

  findById(id) {
    return db('products').where('prod_id', id).first();
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
      .insert(product)
      .then(([id]) => {
        return db('products').where('prod_id', id).first();
      });
  },
};
