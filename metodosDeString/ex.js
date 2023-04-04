let nome = "jose messias junior"
let arrayNomes = nome.split(" ");
//console.log(arrayNomes);
let nomeFormatato = "";
for (const nome of arrayNomes) {
    let primeraLetra = nome.slice(0, 1);
    let restanteDoNome = nome.slice(1);
    nomeFormatato += primeraLetra.toUpperCase() + restanteDoNome + " ";

}

console.log(nomeFormatato.trim());