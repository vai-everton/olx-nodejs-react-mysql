const knex = require('../database');

module.exports = {

    // listar todos os usuarios
    async index(req, res) {
        const results = await knex('users')
        return res.json(results)
    },
    // mostra um unico usuario (indicado por route param)
    async show(req, res) {
        const  identifier  = req.params.id;
        const results = await knex('users').where({id: identifier})
        return res.json(results)
    },
    
    async create(req, res) {
        const name_user = req.body;
        await knex('users').insert(name_user)
        .then(()=>{return res.json({ success: true, message: 'ok'})})
    },

    async update(req, res) {
        await knex('users').where({id: req.params.id})
                        .update({ nome: 'Evton'})
                        .then(res.send("Atualizado"))
    },

    async delete(req, res) {
        await knex('users').where({id: req.params.id})
                        .del()
                        .then(res.send("Deletado"))
        }
}
