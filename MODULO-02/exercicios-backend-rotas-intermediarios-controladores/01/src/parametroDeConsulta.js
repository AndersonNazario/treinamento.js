const express = require('express');
const app = express();

const professores = [
    { id: 1, nome: 'Anderson', stack: 'Backend' },
    { id: 2, nome: 'Igor', stack: 'Backend' },
    { id: 3, nome: 'Andrei', stack: 'Frontend' },
    { id: 4, nome: 'Ana', stack: 'Backend' },
];

app.get('/professores', (requisicao, resposta) => {
    resposta.send(professores);
});

app.get('/professores/:id', (requisicao, resposta) => {
    //console.log(requisicao.params.id);
    const profssorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(profssorEncontrado);
});

app.listen(3000);