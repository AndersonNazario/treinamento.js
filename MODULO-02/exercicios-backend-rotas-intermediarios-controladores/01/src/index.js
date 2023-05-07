const { filtrarProfessores, encontrarUmProfessor } = require('./controladores/professores');
const express = require('express');

const app = express();

//intermediario

const primeiroIntermediario = (requisicao, resposta, next) => {
    console.log('Passei pelo primeiro intermediario');
    //return resposta.send('Algo deu errado!!!');
    next();
};

const SegundarioIntermediario = (requisicao, resposta, next) => {
    console.log('Passei pelo segundo intermediario');
    next();
};

const intermediarioDaRota = (requisicao, resposta, next) => {
    console.log('Passei no intermediario da rota');
    next();
};

//app.use(primeiroIntermediario);
//app.use(SegundarioIntermediario);

// localhost:3000/professores
app.get('/professores', intermediarioDaRota, filtrarProfessores);

// localhost:3000/professores/:id
app.get('/professores/:id', encontrarUmProfessor);

app.listen(3000);