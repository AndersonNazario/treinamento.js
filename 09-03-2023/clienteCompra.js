const produtosConsumidos = [
    {
        nome: "Costela da Casa",
        precoUnidade: 7800,
        quantidade: 5,
    },
    {
        nome: "Churrasco de carne",
        precoUnidade: 700,
        quantidade: 8,
    },
    {
        nome: "Cerveja",
        precoUnidade: 1000,
        quantidade: 32,
    }
];

const cartao = {
    nome: "Lindomar",
    idade: 35,
    produtosConsumidos
};

console.log(cartao);

console.log(cartao.nome);
console.log(cartao.idade);
cartao.nome = "Anderson";
console.log(cartao.nome);

let soma = 0;
//Calculo dos produtos 
for (let i = 0; i < produtosConsumidos.length; i++) {
    soma += produtosConsumidos[i].precoUnidade * produtosConsumidos[i].quantidade;

}

console.log(`${cartao.nome} o valor ser pago é:R$ ${(soma / 100).toFixed(2)}`);