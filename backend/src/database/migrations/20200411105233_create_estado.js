
exports.up = function(knex) {
    return knex.schema.createTable("state", function(table){
        table.string("id").notNullable();
        table.string("name").notNullable();
        table.string("sigla").notNullable();

    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("state");
};
