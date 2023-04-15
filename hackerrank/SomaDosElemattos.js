let valor = [1, 2, 3, 4];

function solucao(lista) {
    let soma = 0;
    if (lista.length < 1000) {
        for (let i = 0; i < lista.length; i++) {
            soma += lista[i];
        }
    }
    console.log(soma);
}

solucao(valor);
