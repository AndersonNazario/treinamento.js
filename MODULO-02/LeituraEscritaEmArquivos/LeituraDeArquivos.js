const fs = require('fs');

console.log('Antes de le');
/* //Letura do TXT sicrona
const buscarTexto = fs.readFileSync('./ArquivoDeTexto/ArquivoDeTexto.txt').toString();
console.log(buscarTexto);
*/

// Letura feita Assicrona
fs.readFile('./ArquivoDeTexto/ArquivoDeTexto.txt', (erro, data) => {
    if (erro) {
        console.log(erro);
    } else {
        console.log(data.toString());
    }
});
console.log('Depois de ler');
