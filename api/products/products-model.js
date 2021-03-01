const db = require('../../database/dbConfig');

module.exports = {
  findProducts() {
    return db('products');
  },

  addProduct(product) {
    return db('products')
      .insert(product)
      .then(([id]) => {
        return db('products').where('product_id', id).first();
      });
  },
};
