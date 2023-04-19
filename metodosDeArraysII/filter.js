// Cria um novo array com todos os elementos correspondente a condição imprementada na função
//callback, passada como argumento.(Não atera o orignal)

const numeros = [5, 1, 8, 1, 7, 10, 20, 4, 3];

const resultadoNumero = numeros.filter((numero) => {
    return numero === 1 || numero === 8;
});

console.log(resultadoNumero);
