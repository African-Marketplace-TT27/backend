const db = require('../../../database/dbConfig');

module.exports = {
  find() {
    return db('types');
  },

  findById(id) {
    return db('types').where('type_id', id).first();
  },

  update(changes, id) {
    const typesId = id;
    return db('types')
      .where('type_id', id)
      .update(changes)
      .then(() => {
        return db('types').where('type_id', typesId).first();
      });
  },

  remove(id) {
    return db('types')
      .where('type_id', id)
      .del()
      .then(() => {
        return db('types');
      });
  },

  add(product) {
    return db('types')
      .insert(product)
      .then(([id]) => {
        return db('types').where('type_id', id).first();
      });
  },
};
