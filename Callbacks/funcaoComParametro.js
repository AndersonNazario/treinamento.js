const frutas = ['uva', 'manga', 'pera', 'abacate', 'laranja'];

const encontarFruta = (arrayFrutas, ValidarFrutaEncontrada) => {
    for (const i of arrayFrutas) {
        if (ValidarFrutaEncontrada(i)) {
            console.log('Fruta encontrada');
            return;
        }
    }
    console.log('Fruta não encontrda');
}

encontarFruta(frutas, (encamnharValidacao) => {
    return encamnharValidacao === 'uva';
});
