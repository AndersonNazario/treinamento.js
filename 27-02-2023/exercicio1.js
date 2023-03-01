let valorDaCompra = 100;
let numeroDeParcelas = 12;

if (numeroDeParcelas === 1) {
    // a vista - 10% de desconto
    let desconto = valorDaCompra - (valorDaCompra * 0, 10);
    console.log(`Valor a ser pago ${desconto.toFixed(2)} reais " pagameto a vista tem 10% de desconto"`);
} else if (numeroDeParcelas >= 2 && numeroDeParcelas <= 6) {
    //compra parceladas sem juros/sem desconto de 2 a 6 parcelas
    let parcelas = valorDaCompra / numeroDeParcelas;
    console.log(`Sua compra ficou ${numeroDeParcelas} parcelas, no valor de ${parcelas.toFixed(2)} reias. Sem desconto`);
} else if (numeroDeParcelas >= 7 && numeroDeParcelas <= 12) {
    //juros
    let valorComjuros = (valorDaCompra * (1 + 1 / 100) ** numeroDeParcelas).toFixed(2);
    let valorDaParcela = (valorComjuros / numeroDeParcelas).toFixed(2);
    console.log(`Sua compra ficou ${numeroDeParcelas} parcelas, no valor de ${valorDaParcela} reias. Devido o juros, valor total ${valorComjuros}`);
} else {
    //numero de parcelas maxima é 12
    console.log("Numero de parcelas invalidas");
}