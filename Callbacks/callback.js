const imprimirNome = (funcaoCallback) => {
    const nome = 'Anderson Lindo';
    const idade = 31;
    funcaoCallback(nome, idade);
}

imprimirNome((buscarNome, buscarIdade) => {
    console.log('A função foi executada');

    if (buscarNome) {
        console.log(`Nome: ${buscarNome}`)
    }
    if (buscarIdade) {
        console.log(`Idade: ${buscarIdade}`);
    }
});