const fsPromises = require('fs/promises');
const fs = require('fs');

console.log('Antes de ler');

//const a = fsPromises.readFile('./ArquivoDeTexto/ArquivoDeTexto.txt');

//a.then((data) => {
//    console.log(data.toString());
//});

//a.catch((erro) => {
//    console.log(erro);
//});

//USANDO ASYNC & AWAIT
(async function () {
    const a = await fsPromises.readFile('./ArquivoDeTexto/ArquivoDeTexto.txt');
    console.log(a.toString());
})();

console.log('depois de ler');