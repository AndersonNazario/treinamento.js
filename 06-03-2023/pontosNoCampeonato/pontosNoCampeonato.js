let resultados = ["V", "E", "V", "E"];

let v = 3;
let e = 1;
let d = 0;
let soma = 0;

for (let i = 0; i < resultados.length; i++) {
    if ("V" === resultados[i]) {
        soma = soma + v;
    } else if ("E" === resultados[i]) {
        soma = soma + e;
    }
}
console.log(soma);



