let numero = 10;
let limiteInferior = 5;
let limiteSuperior = 20;

function validacao(numero, limiteInferior, limiteSuperior) {
    if (numero >= limiteInferior && numero <= limiteSuperior) {
        console.log("PERTENCE");
    } else {
        console.log("NAO PERTENCE");
    }
}

validacao(numero, limiteInferior, limiteSuperior);