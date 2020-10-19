const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController.js');
const anunciosController = require('./controllers/anuncioController.js');



routes.get('/', (req, res) =>{
    res.send("Olá Mundo")
})

routes.get('/users', userController.index)

routes.get('/users/:id', userController.show)

routes.post('/users/', userController.create)

routes.put('/users/:id', userController.update)

routes.delete('/users/:id', userController.delete)

/////////////////////////////////////////////////// 

routes.get('/anuncios', anunciosController.index)

routes.get('/anuncios/:id', anunciosController.show)

routes.post('/anuncios/', anunciosController.create)

routes.put('/anuncios/:id', anunciosController.update)

routes.delete('/anuncios/:id', anunciosController.delete)

module.exports = routes;