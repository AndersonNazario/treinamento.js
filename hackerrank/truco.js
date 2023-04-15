
let carta = "K";
let cartas = ["A", "2", "3", "Q", "J", "K"];

function solucao(carta) {
    let cartas = ["A", "2", "3", "Q", "J", "K"];
    let cartaParaCima = cartas.indexOf(carta);
    let indice = cartas.length - 1;

    if (cartas.indexOf(carta) < indice) {
        console.log(cartas[cartaParaCima + 1]);
    } else {
        console.log(cartas[0]);
    }
}

solucao(carta);



