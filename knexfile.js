const sharedConfig = {
  client: 'sqlite3',
  useNullAsDefault: true,
  migrations: { directory: './database/migrations' },
  pool: {
    afterCreate: (conn, done) => conn.run('PRAGMA foreign_keys = ON', done),
  },
};

module.exports = {
  development: {
    ...sharedConfig,
    connection: { filename: './database/products.db3' },
    seeds: {
      directory: './database/seeds',
    },
  },
  testing: {
    ...sharedConfig,
    connection: { filename: './database/test.db3' },
  },
};
