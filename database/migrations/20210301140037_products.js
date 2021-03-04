exports.up = function (knex) {
  return knex.schema
    .createTable('categories', (tbl) => {
      tbl.increments('category_id');
      tbl.string('category_name');
    })
    .createTable('types', (tbl) => {
      tbl.increments('type_id');
      tbl.string('type_name');
      // tbl.string('suggested_market_price');
    })
    .createTable('units', (tbl) => {
      tbl.increments('unit_id');
      tbl.string('unit_name');
    })
    .createTable('products', (tbl) => {
      tbl.increments('prod_id');
      tbl.string('prod_name').notNullable();
      tbl.string('prod_desc').notNullable();
      tbl.string('price');
      tbl.string('inventory');
      tbl.string('image');
      tbl
        .integer('category_id')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('type_id')
        .unsigned()
        .references('type_id')
        .inTable('types')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
      tbl
        .integer('unit_id')
        .unsigned()
        .references('unit_id')
        .inTable('units')
        .onUpdate('CASCADE')
        .onDelete('CASCADE');
    });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists('products')
    .dropTableIfExists('units')
    .dropTableIfExists('types')
    .dropTableIfExists('categories');
};
