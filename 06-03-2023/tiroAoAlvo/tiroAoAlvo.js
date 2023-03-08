let disparos = [0, 50, 90, 80, 100, 80, 40];

let quantidadesDeDesparos = 0;
for (let i = 0; i < disparos.length; i++) {
    let valorDisparo = disparos[i];

    if (valorDisparo > 70) {
        quantidadesDeDesparos = quantidadesDeDesparos + 1;
    }
}

if (quantidadesDeDesparos >= 3) {
    console.log(quantidadesDeDesparos);
} else if (quantidadesDeDesparos < 3) {
    console.log("ELIMINADO");
}


