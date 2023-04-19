const produtos = [
    { nome: 'arroz', preco: 500 },
    { nome: 'carne', preco: 3200 },
    { nome: 'biscoito', preco: 450 },
    { nome: 'banana', preco: 320 },
];

const desconto = produtos.map((ponteiro) => {
    return { nome: ponteiro.nome, preco: ponteiro.preco, desconto: ponteiro.preco * 0.10 }
});

console.log(desconto);