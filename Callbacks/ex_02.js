const calcularImc = (peso, altura, imc) => {
    const somaIMC = (peso / (altura * altura)).toFixed(0);
    if (somaIMC < 18) {
        return imc(console.log(`IMC = ${somaIMC}: abaixo de 18 = Desnutrição`));
    } else if (somaIMC <= 25) {
        return imc(console.log(`IMC = ${somaIMC}: entrre 18 e 25 = Normal`));
    } else if (somaIMC > 25) {
        return imc(console.log(`IMC = ${somaIMC}: acima de 25 = sobrepeso`));
    }
}

calcularImc(72, 1.70, (buscarImc) => {

});