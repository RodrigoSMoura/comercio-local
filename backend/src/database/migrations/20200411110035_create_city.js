
exports.up = function(knex) {
    return knex.schema.createTable("city", function(table){
        table.string("id").notNullable();
        table.string("name").notNullable();
        table.string("state_id").notNullable();

        table.foreign("state_id").references("id").inTable("state");
    });
};

exports.down = function(knex) {
  return knex.schema.dropTable("city");
};
