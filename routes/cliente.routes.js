const { Router } = require('express');
const routes = Router();
const { cadastrar } = require('../controllers/clientes')

routes.post('/clientes', cadastrar)
//routes.post('/clientes')
//routes.post('/clientes')
//routes.post('/clientes')
//routes.post('/clientes')  

module.exports = routes;