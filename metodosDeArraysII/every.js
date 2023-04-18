const frutas = ['abacaxi', 'manga', 'melncia', 'banana'];
//every valida se a condição passada é verdadeira ou falsa(Se tiver uma palavra = banana sera falso)
const resultados = frutas.every((elementoAtual) => {
    return elementoAtual !== "banana";
});

console.log(resultados);