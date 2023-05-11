const bancoDeDados = require('../bancoDeDados')

const listarInstrutores = (req, res) => {
    return res.json(bancoDeDados.instrutores)
};

const obterInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = bancoDeDados.instrutores.find((idIsntrutor) => {
        return idIsntrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.' })
    }

    return res.status(200).json(instrutor);
}


module.exports = {
    listarInstrutores,
    obterInstrutor,
};