const imprimirNome = (funcaoCallback) => {
    const nome = 'Anderson Lindo';
    const idade = 31;
    funcaoCallback(nome, idade);
}
const dados = (buscarNome, buscarIdade) => {
    console.log('A função foi executada');

    if (buscarNome) {
        console.log(`Nome: ${buscarNome}`)
    }
    if (buscarIdade) {
        console.log(`Idade: ${buscarIdade}`);
    }
};

imprimirNome(dados);