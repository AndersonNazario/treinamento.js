let palavras = [
    "aveia",
    "manha",
    "ave"
];
let primeiraLetra = "a";
let segundaLetra = "v";
let validador = 0;


for (let i = 0; i < palavras.length; i++) {
    let nome = palavras[i];
    if (nome[0] == primeiraLetra && nome[1] == segundaLetra) {
        console.log(nome);
        validador = validador + 1;
    }

}

if (validador === 0) {
    console.log("NENHUMA");
}