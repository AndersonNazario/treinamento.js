function inverterString(texto) {
    const array = texto.split("");
    array.reverse(); //tranformar String em array

    let textoInvertido = "";
    for (let letra of array) { //tranformar array em String
        textoInvertido += letra;
    }
    console.log(textoInvertido);
}

inverterString("Cubos academy");