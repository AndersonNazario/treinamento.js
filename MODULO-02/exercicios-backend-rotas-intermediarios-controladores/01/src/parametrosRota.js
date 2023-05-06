const express = require('express');
const app = express();

const professores = [
    { id: 1, nome: 'Anderson', stack: 'Backend' },
    { id: 2, nome: 'Igor', stack: 'Backend' },
    { id: 3, nome: 'Andrei', stack: 'Frontend' },
    { id: 4, nome: 'Ana', stack: 'Backend' },
];
// localhost:3000/professores
app.get('/professores', (requisicao, resposta) => {
    resposta.send(professores);
});
// localhost:3000/professores/:id
app.get('/professores/:id', (requisicao, resposta) => {
    const profssorEncontrado = professores.find((professor) => {
        return professor.id === Number(requisicao.params.id);
    });
    resposta.send(profssorEncontrado);
});

app.listen(3000);