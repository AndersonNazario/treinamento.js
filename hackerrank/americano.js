const numero = [1, 1, 1, 1, 2];
//const n = [1, 3, 2, 1];

let s = 0;
for (let i = 0; i < numero.length; i++) {
    if (numero[i] > 0 && numero[i] < 10) {
        s += numero[i];
    }
}

while (s > numero.length) {
    s -= numero.length;
}
console.log(s)