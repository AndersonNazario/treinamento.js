let jogadores = [
    {
        "nome": "Herman",
        "jogada": 1
    },
    {
        "nome": "Rhodes",
        "jogada": 1
    },
    {
        "nome": "Beach",
        "jogada": 0
    },
    {
        "nome": "Laurel",
        "jogada": 1
    },
    {
        "nome": "Beatrice",
        "jogada": 1
    },
    {
        "nome": "Alison",
        "jogada": 1
    },
    {
        "nome": "Saundra",
        "jogada": 1
    },
    {
        "nome": "Klein",
        "jogada": 0
    }
];

let contZero = 0;
let contUM = 0;
for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada === 0) {
        contZero += 1;
    } else if (jogadores[i].jogada === 1) {
        contUM += 1;
    }
}
if (contUM === 1 || contZero === 1) {
    let nome = "";
    if (contUM === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 1) {
                nome = jogadores[i].nome;
            }
        }
    } else if (contZero === 1) {
        for (let i = 0; i < jogadores.length; i++) {
            if (jogadores[i].jogada === 0) {
                nome = jogadores[i].nome;
            }
        }
    }
    console.log(nome);
} else {
    console.log("NINGUEM");
}


/*
let nome = "";
for (let i = 0; i < jogadores.length; i++) {
    if (jogadores[i].jogada === 1) {
        nome = jogadores[i].nome;
    }
}
console.log(nome)*/