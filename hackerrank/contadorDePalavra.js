let texto = "Cuidado, pois usuarios as vezes deixam espacos vazios no fim do texto sem querer ";
let teste = texto.lastIndexOf(texto.length, " ")

texto = texto.split(" ");
let contador = 0
for (let i = 0; i < texto.length; i++) {
    if (texto[i]) {
        contador += 1;
    }
}
console.log(contador)

/*
while (numero !== numero.replace(" ", " ")) {
    numero = numero.replace(" ", "");
}*/
//console.log(texto);