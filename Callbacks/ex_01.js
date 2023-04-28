const NomeIdade = (validarNomeIdade) => {
    const nome = 'Anderson';
    const idade = 30;
    validarNomeIdade(nome, idade);
}

const validardacao = (buscarNome, buscarIdade) => {
    if (buscarNome) {
        console.log(`Nome: ${buscarNome}`)
    }
    if (buscarIdade) {
        const anoAtual = new Date().getFullYear();
        const data = anoAtual - buscarIdade;
        console.log(`Idade: ${buscarIdade}`)
        console.log(`Ano de nascimento: ${data}`)
    }
}

NomeIdade(validardacao);
