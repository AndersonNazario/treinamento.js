let precos = [100, 100, 100, 50];
let valorCompra = 0;

precos.sort((a, b) => a - b);


if (precos.length >= 5) {

    for (let i = 1; i < precos.length; i++) {
        valorCompra = valorCompra + precos[i];
    }
} else {
    for (let i = 0; i < precos.length; i++) {
        valorCompra = valorCompra + precos[i];
    }
}


console.log(valorCompra);