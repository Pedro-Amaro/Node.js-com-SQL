const database = require('../db/models')

const cadastrar = async (req, res) => {
    try {
        await database.Cliente.create(req.body )
        return res.send('Cadastro efetuado')
    } catch (error) {
        return res.send(error.message)
    }
}

module.exports = { cadastrar }