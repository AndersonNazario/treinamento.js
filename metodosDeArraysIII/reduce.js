// Executa uma função callback, passada como argumento, 
//para cada elemento de array, que resulta em apemas um valor de retorno
//soma
const array = [1, 2, 3, 4, 5];

const soma = array.reduce((acumulador, elemento, indice, array) => { // não é necessario usar info
    return acumulador + elemento; //ira fazer a soma dos umeros do array
}, 5);//acumulador ira iniciar com valor de 5

console.log(soma);
//20