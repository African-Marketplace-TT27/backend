const db = require('../../../database/dbConfig');

module.exports = {
  find() {
    return db('categories');
  },

  findById(id) {
    return db('categories').where('category_id', id).first();
  },

  update(changes, id) {
    const categoryId = id;
    return db('categories')
      .where('category_id', id)
      .update(changes)
      .then(() => {
        return db('categories').where('category_id', categoryId).first();
      });
  },

  remove(id) {
    return db('categories')
      .where('category_id', id)
      .del()
      .then(() => {
        return db('categories');
      });
  },

  add(product) {
    return db('categories')
      .insert(product)
      .then(([id]) => {
        return db('categories').where('category_id', id).first();
      });
  },
};
