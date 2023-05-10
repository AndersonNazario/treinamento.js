// importadas
const express = require('express');
const rotas = express();

const instrutores = require('./controladores/instrutores');


rotas.get('/instrutores', instrutores.listarInstrutores);



module.exports = rotas;