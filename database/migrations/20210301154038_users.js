exports.up = function (knex) {
  return knex.schema
    .createTable('countries', (tbl) => {
      tbl.increments('country_id');
      tbl.string('country_name').notNullable();
    })
    .createTable('users', (tbl) => {
      tbl.increments('user_id');
      tbl.string('name').notNullable();
      tbl.string('email').notNullable().unique();
      tbl.string('password').notNullable();
      tbl
        .integer('country_id')
        .unsigned()
        .references('country_id')
        .inTable('countries')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema.dropTableIfExists('users').dropTableIfExists('countries');
};
