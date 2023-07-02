const finalDaCopa = new Date(2002, 5, 30, 8);
const horaAdicionada = +finalDaCopa + 1000 * 60 * 60;
const horaAdicionadaEmdata = new Date(horaAdicionada);

console.log(`Final da copa: ${+finalDaCopa}. Final da copa após uma hora: ${horaAdicionada}`);
console.log(horaAdicionadaEmdata);
// apresenta a data em mili-segundo 712897200000 contando apartir de 1970