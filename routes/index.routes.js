const produtos = require('./produtos.routes')
const clientes = require('./cliente.routes')


module.exports = (api) => {
    //api.use("/apiprodutos", produtos);
    api.use("/apiclientes", clientes)
}