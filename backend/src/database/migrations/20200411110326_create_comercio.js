
exports.up = function(knex) {
    return knex.schema.createTable("comercio", function(table){
          table.string("id").primary();
          table.string("access_code").notNullable();
          table.string("name").notNullable();
          table.string("description");
          table.string("email");
          table.string("phone");
          table.string("whatsapp");
          table.boolean("status").defaultTo(false).notNullable();
          table.string("city_id").notNullable();
  
          table.foreign("city_id").references("id").inTable("city");
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable("comercio");
  };
  