let numero = 1;

const contador = (nome) => {
    if (numero >= 10) {
        clearInterval(idSetInterval);
    }
    console.log(`${numero} ${nome}`);
    numero++
}

const idSetInterval = setInterval(contador, 2000, 'Anderson');
//1 Anderson, 2 Anderson ... 6 Anderson ..