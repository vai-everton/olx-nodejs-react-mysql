const knex = require('../database');

module.exports = {
    async index(req, res) {
        const results = await knex('users')
        return res.json(results)
    },
    async create(req, res) {
        const name_user = req.body;
        await knex('users').insert(name_user)
        .then(()=>{return res.json({ success: true, message: 'ok'})})
    },

    update(req, res) {
        knex('users').where({id_user: 2})
                        .update({ name_user: "Evton"})
                        .then(res.send("Atualizado"))
    },
    delete(req, res) {
        knex('users').where({id_user: 7})
                        .del()
                        .then(res.send("Deletado"))
        }

}
