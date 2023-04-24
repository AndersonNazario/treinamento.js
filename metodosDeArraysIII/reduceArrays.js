//transformando varos array em um unico array

const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayReduzido = array.reduce((acomulador, elementoAtual, indice, array) => {
    return [...acomulador, ...elementoAtual];
}, []);

console.log(arrayReduzido);