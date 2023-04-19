//Retorna o indice de primeiro elemento do array, correspndente a condição imprementada na função callback
const modelosCarro = [
    { marca: 'fiat', ano: 2000, cor: 'Azul', porta: 5 },
    { marca: 'fiat', ano: 2018, cor: 'Branco', porta: 5 },
    { marca: 'Ferrari', ano: 2022, cor: 'Vermelha', porta: 3 },
    { marca: 'Tesla', ano: 2023, cor: 'Preto', porta: 5 }
];

const resultado = modelosCarro.findIndex((validar) => {
    return validar.marca === 'Tesla';
});

console.log(resultado);
// 3 