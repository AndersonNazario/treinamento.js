//50 centavos por minuto
//70 centavos por cada quilômtro
//Acima de 10 km os km adicionas ficam mais baratos(50 centavos)
//Acima de 20 minutos os minutos adicionas ficam mais baratos(30 centavos)
// Restrições -


let min = 25;
let km = 11.5;
let validarMinutos = 20;
let validarKm = 10;

function calcularKmAte10(km) {
    let soma = (km * 70);
    return soma;
}
function calcularKmAcimaDe10(km) {
    let valorKmAte10 = calcularKmAte10(validarKm)
    let soma = (km - validarKm);
    soma = soma * 50;
    soma += valorKmAte10;
    return soma;
}
function calcularMinutosAte20(min) {
    let soma = (min * 50);
    return soma;
}
function calcularMinutosAcimaDe20(min) {
    let minutosAte20 = calcularMinutosAte20(validarMinutos);
    let soma = (min - validarMinutos);
    soma = soma * 30;
    soma += minutosAte20;
    return soma;
}


if (min > 20) {
    if (km > 10) {
        let soma = calcularKmAcimaDe10(km) + calcularMinutosAcimaDe20(min);
        console.log(soma);
    } else if (km <= 10) {
        let soma = calcularKmAte10(km) + calcularMinutosAcimaDe20(min);
        console.log(soma);
    }
} else if (min <= 20) {
    if (km > 10) {
        let soma = calcularKmAcimaDe10(km) + calcularMinutosAte20(min);
        console.log(soma);
    } else if (km <= 10) {
        let soma = calcularKmAte10(km) + calcularMinutosAte20(min);
        console.log(soma);
    }
}


