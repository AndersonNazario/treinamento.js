const usuarios = [
    {
        nome: "Anderson",
        idade: 20,
    },
    {
        nome: "Igor",
        idade: 22,
    },
    {
        nome: "Vitor",
        idade: 80,
    },
    {
        nome: "Thayna",
        idade: 17,
    },

];

const validarIdade = ((usuarios) => {
    const resultado = usuarios.every((validacaoDasIdades) => {
        return validacaoDasIdades.idade >= 18;
    });
    if (resultado) {
        console.log("Festa liberada")
    } else {
        console.log("Festa não liberada, tem menor de idade")
    }
});

validarIdade(usuarios);