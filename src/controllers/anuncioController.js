const knex = require('../database');

module.exports = {

    // listar todos os usuarios
    async index(req, res) {
        const results = await knex('anuncios')
        return res.json(results)
    },
    // mostra um unico usuario (indicado por route param)
    async show(req, res) {
        const  identifier  = req.params.id;
        const results = await knex('anuncios').where({id_user: identifier})
        return res.json(results)
    },
    
    async create(req, res) {
        const name_user = req.body;
        await knex('anuncios').insert(name_user)
        .then(()=>{return res.json({ success: true, message: 'ok'})})
    },

    async update(req, res) {
        await knex('anuncios').where({id: req.params.id})
                        .update({ titulo: 'Geladeira Nova'})
                        .then(res.send("Atualizado"))
    },

    async delete(req, res) {
        await knex('anuncios').where({id: req.params.id})
                        .del()
                        .then(res.send("Deletado"))
        }
}
