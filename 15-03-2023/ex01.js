const pessoa = {
    nome: "Jose",
    idade: 12,
    profissao: "estudante",
    altura: 1.4,
};


function apresentacao(pessoa) {
    if (pessoa.idade <= 22) {
        console.log(`Olá meu nome é ${pessoa.nome} sou um jovem de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}  `);
    } else if (pessoa.idade <= 65) {
        console.log(`Olá meu nome é ${pessoa.nome} sou um adulto de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}  `);
    } else {
        console.log(`Olá meu nome é ${pessoa.nome} sou um idoso de ${pessoa.idade}, ${pessoa.altura}m de altura e sou ${pessoa.profissao}  `);
    }
}

apresentacao(pessoa);

