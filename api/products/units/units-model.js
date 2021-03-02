const db = require('../../../database/dbConfig');

module.exports = {
  find() {
    return db('units');
  },

  findById(id) {
    return db('units').where('unit_id', id).first();
  },

  update(changes, id) {
    const unitsId = id;
    return db('units')
      .where('unit_id', id)
      .update(changes)
      .then(() => {
        return db('units').where('unit_id', unitsId).first();
      });
  },

  remove(id) {
    return db('units')
      .where('unit_id', id)
      .del()
      .then(() => {
        return db('units');
      });
  },

  add(unit) {
    return db('units')
      .insert(unit)
      .then(([id]) => {
        return db('units').where('unit_id', id).first();
      });
  },
};
