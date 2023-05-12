const bancoDeDados = require("../bancoDeDados");


const cadastrarAulas = (req, res) => {
    const { idInstrutor } = req.params;
    const { titulo, descricao } = req.body;

    const validacaoDeInstrutor = bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);

    });


    if (!validacaoDeInstrutor) {
        return res.status(404).json({ mensagem: `Intrutor não encontrado` })
    }

    const adicionarAula = {
        id: bancoDeDados.identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao,
    }
    bancoDeDados.aulas.push(adicionarAula);

    return res.status(201).json(adicionarAula);
}

const informarAulas = (req, res) => {
    return res.status(200).json(bancoDeDados.aulas);
}

const informarAulaEspecifica = (req, res) => {
    const { id } = req.params;

    const validarExistenciaDeAula = bancoDeDados.aulas.find((todasAulas) => {
        return todasAulas.id === Number(id);
    });

    if (!validarExistenciaDeAula) {
        return res.status(404).json({ mensagem: `livro não existe` })
    }

    return res.status(202).json(validarExistenciaDeAula);
}

const aulasDoInstrutor = (req, res) => {
    const { idInstrutor } = req.params;

    const validacaoDeInstrutor = bancoDeDados.instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);

    });

    if (!validacaoDeInstrutor) {
        return res.status(404).json({ mensagem: `Intrutor não encontrado` })
    };

    const validarAulasExistendeDoInstrutor = bancoDeDados.aulas.filter((validarAulaInstrutor) => {
        return validarAulaInstrutor.instrutor_id === Number(idInstrutor);
    });

    if (!validarAulasExistendeDoInstrutor) {
        return res.status(404).json({ mensgame: `instrutor não tem aulas cadastradas` });
    }

    return res.status(200).json(validarAulasExistendeDoInstrutor);

}

module.exports = {
    cadastrarAulas,
    informarAulas,
    informarAulaEspecifica,
    aulasDoInstrutor,
}