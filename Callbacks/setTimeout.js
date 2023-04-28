const microondas = (tempo) => {
    console.log("iniciou");
    tempo = tempo * 1000;
    setTimeout(() => {
        console.log("Finalizou!!!!")
    }, tempo);
}

const minutos = 5;
microondas(minutos);