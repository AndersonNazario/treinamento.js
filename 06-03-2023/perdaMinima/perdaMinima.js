let precos = [20, 15, 8, 2, 12];
let menorPrejuizo = 9999999999999999;
for (let i = 0; i < precos.length; i++) {
    for (let j = i + 1; j < precos.length; j++) {
        let compra = precos[i];
        let venda = precos[j];
        let prejuizo = compra - venda;

        if (prejuizo > 0) {
            if (prejuizo < menorPrejuizo) {
                menorPrejuizo = prejuizo;
            }
        }
    }
}
console.log(menorPrejuizo);
