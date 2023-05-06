const professores = require('../bancoDeDados');

const filtrarProfessores = (requisicao, resposta) => {
    const { stack } = requisicao.query;
    let resultado = professores;
    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    }

    resposta.send(resultado);
};

const encontrarUmProfessor = (requisicao, resposta) => {
    const profssorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(profssorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}