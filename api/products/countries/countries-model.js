const db = require('../../../database/dbConfig');

module.exports = {
  find() {
    return db('countries');
  },

  findById(id) {
    return db('countries').where('country_id', id).first();
  },

  update(changes, id) {
    const countriesId = id;
    return db('countries')
      .where('country_id', id)
      .update(changes)
      .then(() => {
        return db('countries').where('country_id', countriesId).first();
      });
  },

  remove(id) {
    return db('countries')
      .where('country_id', id)
      .del()
      .then(() => {
        return db('countries');
      });
  },

  add(country) {
    return db('countries')
      .insert(country)
      .then(([id]) => {
        return db('countries').where('country_id', id).first();
      });
  },
};
