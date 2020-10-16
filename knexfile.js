// Update with your config settings.

module.exports = {

  development: {
    client: 'mysql',
    connection: {
      database: 'olx',
      user:     'root',
      password: 'justapassword'
    },

    migrations: {
      tableName: 'knex_migrations',
      directory: `${__dirname}/src/database/migrations`
    }
  }

};
