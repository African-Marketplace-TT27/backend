const db = require('../../database/dbConfig');

async function add(user) {
  const [id] = await db('users').insert(user, 'user_id');
  return findById(id);
}

function findBy(filter) {
  return db('users').where(filter).orderBy('user_id');
}

function findById(id) {
  db('users').where({ id }).first();
}

function remove(id) {
  return db('users')
    .where('users_id', id)
    .del()
    .then(() => {
      return db('users');
    });
}

module.exports = {
  add,
  findBy,
  findById,
  remove,
};
