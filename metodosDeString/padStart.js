const ultimos4Digitos = "1234";

const numeroCartao = ultimos4Digitos.padStart(19, "**** "); //acresenta caracter 
console.log(ultimos4Digitos);
console.log(numeroCartao);

//ex:
console.log("___________________________");
function imprimirData(dia, mes, ano) {
    let diaFormatado = String(dia).padStart(2, "0");
    let mesFormatado = `${mes}`.padStart(2, "0");

    console.log(`${diaFormatado}/${mesFormatado}/${ano}`);

}

imprimirData(14, 1, 2021);