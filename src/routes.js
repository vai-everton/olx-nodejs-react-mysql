const express = require('express');
const routes = express.Router();

const userController = require('./controllers/userController.js');

routes.get('/', (req, res) =>{
    res.send("Olá Mundo")
})

routes.get('/users', userController.index)

routes.post('/users', userController.create)

routes.put('/users', userController.update)

routes.delete('/users', userController.delete)

module.exports = routes;