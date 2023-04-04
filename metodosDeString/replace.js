const texto = "Eu amo jogar bola, amo fazer gol! a cada gol eu ganho 97.50";

console.log(texto.replace("amo", "adoro"));// troca as palavras informadas
console.log(texto.replace(".", ","));

/// ex 02
console.log("_______________________________")
let numero = "1,350,00";

while (numero !== numero.replace(",", ".")) {
    numero = numero.replace(",", ".");
}

console.log(numero);
