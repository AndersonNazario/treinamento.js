const bancoDeDados = require('../bancoDeDados');
let { identificadorInstrutor } = require('../bancoDeDados');

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

const cadastrarInstrutor = (req, res) => {
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: 'O nome é obrigatorio' })
    }

    if (!email) {
        return res.status(400).json({ mensagem: 'O email é obrigatorio' })
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true
    }

    bancoDeDados.instrutores.push(instrutor);

    return res.status(201).json(instrutor);
}

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
};