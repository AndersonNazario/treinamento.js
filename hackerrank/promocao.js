let precos = [100, 50];

let soma = 0;
if (precos.length < 100) {
    if (precos.length >= 3) {
        precos.sort(function (a, b) { return a - b });
        soma = precos[0] / 2;
        for (let i = 1; i < precos.length; i++) {
            soma += precos[i];
        }
    } else {
        for (let i = 0; i < precos.length; i++) {
            soma += precos[i];
        }
    }
}
console.log(soma);
