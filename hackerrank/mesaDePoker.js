let min = 2;
let max = 10;
const valores = [0, 5, 6, 10, 11];

let valoresPermitido = [];
let permitido = 0;
for (let i = 0; i < valores.length; i++) {
    if (valores[i] <= max && valores[i] >= min) {
        permitido = valores[i];
        valoresPermitido.push(permitido);
    }
}

console.log(valoresPermitido);