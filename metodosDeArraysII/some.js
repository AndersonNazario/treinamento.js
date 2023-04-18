const nomes = ['Anderson', 'Thalia', 'Igor', 'Thayna'];
/*
const minhaFuncaoCallback = (nomes) => {
    return nomes === 'Anderson';
}
const resultado = nomes.some(minhaFuncaoCallback);
*/
const resultado = nomes.some((nome) => {
    return nome === 'Anderson';
});

console.log(resultado);