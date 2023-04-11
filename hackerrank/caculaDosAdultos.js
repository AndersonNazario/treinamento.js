const lista = [30, 25, 18, 2, 5, 50, 31, 100];

if (lista.length > 0 && lista.length < 1000) {
    let ponteiro = 0;
    let listaDeaprovado = [];
    while (ponteiro < lista.length) {
        if (lista[ponteiro] >= 18) {
            listaDeaprovado.push(lista[ponteiro])
        }
        ponteiro++
    }
    if (listaDeaprovado.length === 0) {
        console.log("CRESCA E APARECA");
    } else {
        listaDeaprovado.sort((a, b) => {
            return Number(a - b)
        });
        console.log(listaDeaprovado);
        console.log(listaDeaprovado[0]);
    }
}
