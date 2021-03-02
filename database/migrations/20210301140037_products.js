exports.up = function (knex) {
  return knex.schema
    .createTable('categories', (tbl) => {
      tbl.increments('category_id');
      tbl.string('category_name');
    })
    .createTable('types', (tbl) => {
      tbl.increments('type_id');
      tbl.string('type_name');
    })
    .createTable('units', (tbl) => {
      tbl.increments('unit_id');
      tbl.string('unit_name');
    })
    .createTable('products', (tbl) => {
      tbl.increments('prod_id');
      tbl.string('prod_name').notNullable();
      tbl.string('prod_desc').notNullable();
      tbl.decimal('price');
      tbl.integer('inventory');
      tbl.string('image');
      tbl
        .integer('category')
        .unsigned()
        .references('category_id')
        .inTable('categories')
        .onDelete('CASCADE');
      tbl
        .integer('type')
        .unsigned()
        .references('type_id')
        .inTable('types')
        .onDelete('CASCADE');
      tbl
        .integer('unit_id')
        .unsigned()
        .references('unit_id')
        .inTable('units')
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
