function faixaDeIdade(idade) {
    if (idade <= 21) {
        return console.log(`jovem`);
    } else if (idade <= 65) {
        return console.log(`Adulto`);
    } else if (idade >= 66) {
        return console.log(`Idoso`);
    }
}

faixaDeIdade(22);