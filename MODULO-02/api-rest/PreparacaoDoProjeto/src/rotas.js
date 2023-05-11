// importadas
const express = require('express');
const rotas = express();

const instrutores = require('./controladores/instrutores');


rotas.get('/instrutores', instrutores.listarInstrutores);
rotas.get('/instrutores/:id', instrutores.obterInstrutor)


module.exports = rotas;