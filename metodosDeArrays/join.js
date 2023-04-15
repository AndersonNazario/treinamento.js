const opcoes = ["eu", "voce", "ele"];
let resultado = opcoes.join(" "); // Ajunta os elementos de um array em uma string
console.log(opcoes);
console.log(resultado);// eu voce ele
resultado = opcoes.join(", ");
console.log(resultado); //eu, voce, ele
resultado = opcoes.join(" * ");
console.log(resultado); //eu * voce * ele