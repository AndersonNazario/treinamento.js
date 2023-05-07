const carros = require('../bancoDeDados');

//Pesquisar carro por marca e cor
function listagemCarro(requisicao, resposta) {
    const { marca, cor } = requisicao.query;
    let resultado = carros;

    if (marca) {
        resultado = resultado.filter((carro) => {
            return carro.marca === marca;
        });
    }

    if (cor) {
        resultado = resultado.filter((carro) => {
            return carro.cor === cor;
        });
    }

    resposta.send(resultado);
}

//pesquisar carro pelo ID(id)
const obterCarro = (requisicao, resposta) => {
    const { id } = requisicao.params; //para buscar um parametro de uma requisicao usamos o (params);

    const carroEncontrado = carros.find((carro) => {
        return carro.id === Number(id);
    });

    resposta.send(carroEncontrado);
}

const senha = (requisicao, resposta) => {
    const validarSenha = "carros123";
    const { senha } = requisicao.params;

    if (senha !== validarSenha) {
        return console.log(`senha incorreta snha${senha} senha informada:${validarSenha}`);
    }
};

module.exports = {
    listagemCarro,
    obterCarro,
    senha
}