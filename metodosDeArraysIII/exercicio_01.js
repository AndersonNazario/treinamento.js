const carros = [
    { nome: 'corola', marca: 'toyota', ano: '2020', cor: 'prata' },
    { nome: 'argo', marca: 'fiat', ano: '2021', cor: 'preto' },
    { nome: 'ranger', marca: 'ford', ano: '2021', cor: 'prata' },
    { nome: 'ranger', marca: 'toyota', ano: '2018', cor: 'branco' },
    { nome: 'hilux', marca: 'fearri', ano: '2000', cor: 'azul' }
];

const pesquisaOrdenada = (carros, pesquisa) => {
    carros.sort((a, b) => {
        return a[pesquisa].localeCompare(b[pesquisa]);
    });
    return console.log(carros);
};

pesquisaOrdenada(carros, 'ano');