const professores = require('../bancoDeDados');

const filtrarProfessores = (requisicao, resposta) => {
    const { stack } = requisicao.query;
    let resultado = professores;

    console.log('Cheguei no controlador de filtargem de prefessores!');

    if (stack) {
        resultado = professores.filter((professor) => {
            return professor.stack === stack;
        });
    }

    resposta.send(resultado);
};

const encontrarUmProfessor = (requisicao, resposta) => {
    console.log('Rota para encontra um professor!')
    const profssorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(profssorEncontrado);
};

module.exports = {
    filtrarProfessores,
    encontrarUmProfessor
}