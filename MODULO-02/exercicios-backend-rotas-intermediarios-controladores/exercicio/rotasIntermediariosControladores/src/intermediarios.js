const validarSenha = (requisicao, resposta, next) => {
    const validarSenha = "carros123";
    const { senha } = requisicao.query;

    if (!senha) {
        return resposta.send('Senha não informada');
    }
    if (senha !== validarSenha) {
        return resposta.send(`senha incorreta snha${senha}`)
    }

    next();
};

module.exports = {
    validarSenha,
}

