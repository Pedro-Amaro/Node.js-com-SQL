const { Router } = require('express');
const routes = Router();
const { cadastrar, deletarCliente, editCliente, listarCliente, listarClienteById } = require('../controllers/clientes')


routes.get('/cliente', listarCliente)
routes.get('/cliente/:id', listarClienteById)
routes.post('/cliente', cadastrar)
routes.delete('/cliente/:id', deletarCliente)
routes.put('/cliente/:id', editCliente)


module.exports = routes;