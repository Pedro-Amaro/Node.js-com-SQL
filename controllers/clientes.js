const database = require("../db/models");

//Listando todos os clientes
const listarCliente = async (req, res) => {
    const clintesListas = await database.Cliente.findAll();
    
    if(clintesListas){
        return res.send(clintesListas);
    };
        return res.send("Não foi possível listar");
}

//listando um usuário por vez
const listarClienteById = async (req, res) => {
    const { id } = req.params;
    const consultaId =await database.Cliente.findOne({
        where: {
            id: Number(id),
        },
        });
        if (consultaId) {
            return res.send(consultaId)
        }
            return res.send("Não foi encontrado/inexistente")
}


const cadastrar = async (req, res) => {
    try {
    await database.Cliente.create(req.body);
    return res.send(req.body);
    } catch (error) {
    return res.send(error.message);
    }
};

const deletarCliente = async (req, res) => {
    const { id } = req.params;


    const consultaId =await database.Cliente.findOne({
    where: {
        id: Number(id),
    },
    });

    if (consultaId) {
            await database.Cliente.destroy({
                where: {
                    id: Number(id),
                },
                });
            return res.send("Deletado");
            
    }
    return res.send("Usuário não encontrado");
};

const editCliente = async (req, res) => {
    const { id } = req.params;
    const consultaId =await database.Cliente.findOne({
        where: {
            id: Number(id),
        },
        });

    if (consultaId) {
        await database.Cliente.update(req.body,{
            where: {
                id: Number(id),
            },
            });
            return res.send("Editado");
    }
            return res.send("Não Editado");
};

module.exports = { cadastrar, deletarCliente, editCliente, listarCliente, listarClienteById };
