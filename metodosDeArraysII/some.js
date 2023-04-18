const nomes = ['Anderson', 'Thalia', 'Igor', 'Thayna'];
/*
const minhaFuncaoCallback = (nomes) => {
    return nomes === 'Anderson';
}
const resultado = nomes.some(minhaFuncaoCallback);
*/
// some valida se tem um valos na igual 
const resultado = nomes.some((nome) => {
    return nome === 'Anderson';
});

console.log(resultado);