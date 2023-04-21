const usuario = [
    { id: 11, nome: 'Joao', idade: 23 },
    { id: 2, nome: 'Igor', idade: 18 },
    { id: 4, nome: 'Anderson', idade: 30 },
    { id: 1, nome: 'Italo', idade: 17 },
    { id: 123, nome: 'Thayna', idade: 17 },
];

usuario.sort((a, b) => {
    return a.id - b.id;
});
console.log(usuario);
//crescente

usuario.sort((a, b) => {
    return b.id - a.id;
});
console.log(usuario);
//decrescente