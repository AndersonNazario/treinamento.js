const microondas = (tempo) => {
    console.log("Iniciou");
    let contador = 1;

    const idSetInterval = setInterval(() => {
        console.log(contador);
        if (contador >= tempo / 1000) {
            console.log("Fim!")
            clearInterval(idSetInterval);
            return;
        }
        contador++
    }, 1000);
}

const tempo = 10;
microondas(tempo * 1000)