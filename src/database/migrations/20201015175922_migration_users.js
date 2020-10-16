
exports.up = function(knex) {
  return knex.schema.createTable('users', table =>{
      table.increments('id_user')
      table.text('name_user', 25).notNullable()
  })
};

exports.down = function(knex) {
  return knex.schema.dropTable('users');
};
