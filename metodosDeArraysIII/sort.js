// Orderna os elementos do proprio array
//por padrão, a ordenação é de acordo com a tabela unicode
//Exempro [2, 4, 1, 20, 3, 43]
//exemplo.sort(); saida - [1, 2, 20, 3, 4, 43]
// Para retornar em ordem crescente e não unicode
// exemplo.sort((a-b) => {
//      return a - b;
// });

const numeros = [2, 4, 1, 20, 3, 43, 100];

//console.log(numeros);
//[2, 4, 1, 20, 3, 43, 100];

numeros.sort();
console.log(numeros);
//[1, 100, 2, 20, 3, 4, 43];

const ordenado = numeros.sort((a, b) => {
    return a - b;
});

console.log(ordenado);
//[1,  2, 3, 4, 20, 43, 100]