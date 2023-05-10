const bancoDeDados = require('../bancoDeDados')

const listarInstrutores = (req, res) => {
    return res.json(bancoDeDados.instrutores)
};

module.exports = {
    listarInstrutores,
};