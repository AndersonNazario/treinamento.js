const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground')

//then serve para acionar o Assicrona
//getCityFromZipcode('04387320').then((cidade) => {
//    console.log(cidade);
//}).catch((erro) => { // o catch serve para retornar o erro
//    console.log(erro);
//});

//*****************************************************************/

/*
const cidade = getCityFromZipcode("04387320");
cidade.then((cidade) => {
    console.log(cidade)
})

cidade.catch((erro) => {
    console.log(erro.message)
})
console.log(cidade);
*/

//*****************************************************************/

getCityFromZipcode('04387320').then((cidade) => {
    console.log(cidade)
    getStateFromZipcode('04387320').then((uf) => {
        console.log(uf);
    });
});
