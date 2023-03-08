let notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 1001];
let soma = 0;
let tamanhoDoindce = notas.length - 1;
let notasEmOrdemCresente = notas.sort(function (a, b) {
    return a - b;
})
notasEmOrdemCresente.pop();
notasEmOrdemCresente.shift();

for (let i = 0; i < notasEmOrdemCresente.length; i++) {
    soma = soma + notasEmOrdemCresente[i];
}


console.log(soma / notasEmOrdemCresente.length);