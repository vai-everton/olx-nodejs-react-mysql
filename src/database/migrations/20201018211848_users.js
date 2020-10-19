
exports.up = function(knex) {
    return knex.schema.createTable('users', table =>{
        table.increments('id').primary()
        table.text('nome', 25).notNullable()
    })
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTable('users');
  };
  