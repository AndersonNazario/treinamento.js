const input = "cubos cuggbyos"
let separadorDelinha = input.split(" ");//no hackerRank split("\n")
let senha = separadorDelinha[0];
let senhaDigitada = separadorDelinha[1];

let ponteiro = 0;
for (let i = 0; i < senhaDigitada.length; i++) {
    if (senhaDigitada[i] === senha[ponteiro]) {
        ponteiro++;
        if (ponteiro === senha.length) {
            console.log("SIM");
            return;
        }
    }
}
console.log("NAO");


















/*
let senhaValidada = "";
if (linha2.length > linha1.length) {

    for (const i in linha1) {
        for (const ii in linha2) {
            if (linha1[i] === linha2[ii]) {
                senhaValidada += linha1[i];
            }
        }
    }
    if (linha1 === senhaValidada) {
        console.log("SIM");
    } else {
        console.log("NAO");
    }
}

*/