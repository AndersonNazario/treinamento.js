//validar se a letra iniciar e igual a do sorteio
let letrtra = "m";
let palavras = ["mamao", "maca", "melao", "melancia", "laranja", "melão", "Malao"];
let erro = 0;


for (let i = 0; i < palavras.length; i++) {
    let testarLetra = palavras[i];
    let comparaPalavra = palavras[i];
    comparaPalavra = comparaPalavra.normalize("NFD").replace(/[^a-z\s]/g, "");

    if (letrtra === testarLetra[0] && comparaPalavra === palavras[i]) {
        //console.log(palavras[i]);
    } else {
        erro = erro + 1;
    }
}

console.log(erro);






