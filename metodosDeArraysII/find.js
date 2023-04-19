//retorna o primeiro elemento encontrado que for passado na condição informada
//tras o objeto completo
const usuarios = [
    {
        nome: "Anderson",
        idade: 20,
    },
    {
        nome: "Igor",
        idade: 22,
    },
    {
        nome: "Vitor",
        idade: 80,
    },
    {
        nome: "Thayna",
        idade: 17,
    },

];

const resultado = usuarios.find((teste) => {
    return teste.idade === 20;
});


console.log(resultado);