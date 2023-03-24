const pessoa = {
    nome: "Jose",
    idade: 22,
    profissao: "estudante",
    altura: 1.4,
}

function apresentacao(pessoa) {
    const faixaEtaria = faixaDeIdade(pessoa.idade)
    console.log(`Olá meu nome é ${pessoa.nome} sou um ${faixaEtaria} de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}  `);
}

function faixaDeIdade(idade) {
    if (idade <= 21) {
        return (`jovem`);
    } else if (idade <= 65) {
        return (`Adulto`);
    } else if (idade >= 66) {
        return (`Idoso`);
    }
}

apresentacao(pessoa);