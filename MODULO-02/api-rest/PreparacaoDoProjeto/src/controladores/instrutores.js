const bancoDeDados = require('../bancoDeDados');
let { identificadorInstrutor } = require('../bancoDeDados');

//ver listagem da coleção
const listarInstrutores = (req, res) => {
    return res.json(bancoDeDados.instrutores)
};
//ver um recurso especifico da coleção
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
//adicionar recurso inteiro dentro de uma coleção
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
//editar todo o recurço especifico
const editarInstrutor = (req, res) => {
    const { id } = req.params;
    const { nome, email, status } = req.body;

    if (!nome) {
        return res.status(400).json({ mensagem: `Nome é obrigatoriso` });
    }
    if (!email) {
        return res.status(400).json({ mensagem: `E-mail é obrigatorio!` });
    }


    const instrutor = bancoDeDados.instrutores.find((idIsntrutor) => {
        return idIsntrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.' })
    }

    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return res.status(204).json({ mensagem: `Atualizado` });
}
//editar uma parte do recurço escolhido
const atualizarStatusDoIntrutor = (req, res) => {
    const { id } = req.params;
    const { status } = req.body;

    const instrutor = bancoDeDados.instrutores.find((idIsntrutor) => {
        return idIsntrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: 'instrutor não encontrado.' })
    }

    instrutor.status = status;

    return res.status(204).json();
}
//deletar
const excluirInstrutor = (req, res) => {
    const { id } = req.params;

    const instrutor = bancoDeDados.instrutores.find((idInstrutor) => {
        return idInstrutor.id === Number(id);
    });

    if (!instrutor) {
        return res.status(404).json({ mensagem: `instrutor não encontrado.` })
    }

    bancoDeDados.instrutores = bancoDeDados.instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    });

    return res.status(204).send();
}

module.exports = {
    listarInstrutores,
    obterInstrutor,
    cadastrarInstrutor,
    editarInstrutor,
    atualizarStatusDoIntrutor,
    excluirInstrutor,
};