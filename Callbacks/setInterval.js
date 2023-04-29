let numero = 1;
nome(() => {

})

setInterval((nome) => {
    console.log(`${numero} ${nome}`);
    numero++
}, 2000);

