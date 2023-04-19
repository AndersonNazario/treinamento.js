const modelosCarro = [
    { marca: 'fiat', ano: 2000, cor: 'Azul', porta: 5 },
    { marca: 'fiat', ano: 2018, cor: 'Branco', porta: 5 },
    { marca: 'Ferrari', ano: 2022, cor: 'Vermelha', porta: 3 },
    { marca: 'Tesla', ano: 2023, cor: 'Preto', porta: 5 }
];

const validarCarro = (marcaDocarro, marcas) => {
    const resultadoPesquisa = marcaDocarro.find((modelosCarro) => {
        return modelosCarro.marca === marcas;
    })
    console.log(resultadoPesquisa);
};


validarCarro(modelosCarro, 'Ferrari');
//{ marca: 'Ferrari', ano: 2022, cor: 'Vermelha', porta: 3 }