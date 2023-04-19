// Cria um novo array com todos os elementos correspondente a condição imprementada na função
//callback, passada como argumento.(Não atera o orignal) 
//tras todas as informaçoes do objeto
const professor = [
    { nome: 'Gustavo', stack: 'backend' },
    { nome: 'Gustavo', stack: 'backend' },
    { nome: 'Gustavo', stack: 'frontend' },
    { nome: 'Gustavo', stack: 'frontend' },
    { nome: 'Gustavo', stack: 'backend' },
    { nome: 'Gustavo', stack: 'frontend' }
];

const professoresBackend = professor.filter((i) => {
    return i.stack === 'backend';
});

const professoresFrontend = professor.filter((i) => {
    return i.stack === 'frontend';
});
console.log(professoresBackend);
//[
//    { nome: 'Gustavo', stack: 'backend' },
//    { nome: 'Gustavo', stack: 'backend' },
//    { nome: 'Gustavo', stack: 'backend' }
//]
console.log(professoresFrontend);
//[
//   { nome: 'Gustavo', stack: 'frontend' },
//   { nome: 'Gustavo', stack: 'frontend' },
//   { nome: 'Gustavo', stack: 'frontend' }
//]
