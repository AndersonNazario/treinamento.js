let palavra = 'abelha';
let palpite = 'b';
let acerto = 0;
for (let i = 0; i < palavra.length; i++) {
    if (palpite === palavra[i]) {
        acerto = acerto + 1;
    }
}


console.log(acerto);