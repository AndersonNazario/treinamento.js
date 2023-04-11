let input = "caps";
//let textoIneiro = input.split("");
//let textoFormatado = "";


if (input === input.toUpperCase()) {
    console.log(input.toLowerCase());
} else if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
    console.log(`${input[0].toUpperCase()}${input.slice(1).toLowerCase()}`);
} else {
    console.log(input);
}



/*
function validarRestante(input) {
    let quantidadeMaiuscula = 0;

    for (let i = 1; i < input.length; i++) {
        let maiuscula = input[i].toUpperCase();

        if (input[i] === maiuscula) {
            quantidadeMaiuscula += 1;
        }
    }
    return quantidadeMaiuscula;
}


function validarMaiuscula(input) {
    let quantidadeMaiuscula = 0;

    for (let i = 0; i < input.length; i++) {
        let maiuscula = input[i].toUpperCase();

        if (input[i] === maiuscula) {
            quantidadeMaiuscula += 1;
        }
    }
    return quantidadeMaiuscula;
}
function validarMinuscula(input) {
    let quantidadeMinuscula = 0;

    for (let i = 0; i < input.length; i++) {
        let minuscula = input[i].toLowerCase();

        if (input[i] === minuscula) {
            quantidadeMinuscula += 1;
        }

    }
    return quantidadeMinuscula;
}

if (input.length < 100) {

    if (validarMaiuscula(input) === input.length) {
        console.log(input.toLowerCase())
    } else if (validarMinuscula(input) === input.length) {
        console.log(input);
    } else if (input[0] === input[0].toLowerCase() && input.slice(1) === input.slice(1).toUpperCase()) {
        let primeiLetra = input[0];
        let restanteLetras = input.slice(1);
        restanteLetras = restanteLetras.toLowerCase();
        console.log(`${primeiLetra.toUpperCase()}${restanteLetras.toLowerCase()}`);
    } else {
        console.log(input);
    }
}
*/

/*

function remontarTexto() {
    for (const nome of textoIneiro) {
        let primeraLetra = nome.slice(0, 1);
        let restanteDoTexto = nome.slice(1);
        textoFormatado += primeraLetra.toUpperCase() + restanteDoTexto.toLowerCase() + " ";
    }
    console.log(textoFormatado.trim().replace(/[^a-zA-Z\s]/g, ""));
}

function validarRestante(input) {
    let quantidadeMaiuscula = 0;

    for (let i = 1; i < input.length; i++) {
        let maiuscula = input[i].toUpperCase();

        if (input[i] === maiuscula) {
            quantidadeMaiuscula += 1;
        }
    }
    return quantidadeMaiuscula;
}


function validarMaiuscula(input) {
    let quantidadeMaiuscula = 0;

    for (let i = 0; i < input.length; i++) {
        let maiuscula = input[i].toUpperCase();

        if (input[i] === maiuscula) {
            quantidadeMaiuscula += 1;
        }
    }
    return quantidadeMaiuscula;
}
function validarMinuscula(input) {
    let quantidadeMinuscula = 0;

    for (let i = 0; i < input.length; i++) {
        let minuscula = input[i].toLowerCase();

        if (input[i] === minuscula) {
            quantidadeMinuscula += 1;
        }

    }
    return quantidadeMinuscula;
}

if (input.length < 100) {
    let validarPrimeiraLetra = input[0];
    if (validarMaiuscula(input) === input.length) {
        console.log(input.toLowerCase())
    } else if (validarMinuscula(input) === input.length) {
        console.log(input);
    } else if (validarRestante(input) === input.length - 1 && input[0] === validarPrimeiraLetra) {
        let primeiLetra = input[0];
        let restanteLetras = input.slice(1);
        console.log(`${primeiLetra.toUpperCase()}${restanteLetras.toLowerCase()}`);
    } else {
        let primeiLetra = input[0];
        let restanteLetras = input.slice(1);
        let refaturarTxto = (`${primeiLetra.toUpperCase()}${restanteLetras.toLowerCase()}`);
        remontarTexto(refaturarTxto);
    }

}*/