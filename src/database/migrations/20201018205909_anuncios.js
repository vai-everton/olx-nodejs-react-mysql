
exports.up = function(knex) {
  return knex.schema.createTable('anuncios', table =>{
      table.increments('id')
      table.text('titulo', 30).notNullable()
      table.text('descricao', 270).notNullable()
      table.float('valor')
      table.integer('id_user').notNullable()
    })
};

exports.down = function(knex) {
    return knex.schema.dropTable('anuncios')
};
