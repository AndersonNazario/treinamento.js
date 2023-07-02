const finalCopa = new Date(2002, 5, 30, 8);
const primeiroGol = +finalCopa + 1000 * 60 * (45 + 15 + 22);
const seegundoGol = +finalCopa + 1000 * 60 * (45 + 15 + 34);

console.log(new Date(primeiroGol));
console.log(new Date(seegundoGol));