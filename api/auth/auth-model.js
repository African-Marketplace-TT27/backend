const db = require('../../data/dbConfig');

module.exports = {
  add,
  findBy,
  find,
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return db('users').where({ id }).first();
}

function find() {
  return db('users');
}

function findBy(filter) {
  return db('users').where(filter).first();
}
