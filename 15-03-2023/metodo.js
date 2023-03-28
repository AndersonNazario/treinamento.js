const pessoa = {
    nome: "Jose",
    idade: 22,
    profissao: "estudante",
    altura: 1.4,
    apresentacao: function () {
        const faixaEtaria = this.faixaDeIdade(this.idade)
        console.log(`Olá meu nome é ${this.nome} sou um ${faixaEtaria} de ${this.idade}, ${this.altura}m de altura e sou ${this.profissao}  `);
    },
    faixaDeIdade: function () {
        if (this.idade <= 21) {
            return (`jovem`);
        } else if (this.idade <= 65) {
            return (`Adulto`);
        } else if (this.idade >= 66) {
            return (`Idoso`);
        }
    }
}



pessoa.apresentacao();