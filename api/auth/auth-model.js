const db = require('../../data/dbConfig');

module.exports = {
  add,
  findBy,
  // find,
};

async function add(user) {
  const [id] = await db('users').insert(user);
  return db('users').where({ id }).first();
}

// function find(filter) {
//   return db('users').where(filter).orderBy('user_id');
// }

function findBy(filter) {
  return db('users').where(filter).first();
}
