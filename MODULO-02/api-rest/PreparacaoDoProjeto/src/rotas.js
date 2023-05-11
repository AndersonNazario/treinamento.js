// importadas
const express = require('express');
const rotas = express();

const instrutores = require('./controladores/instrutores');


rotas.get('/instrutores', instrutores.listarInstrutores);//ver listagem da coleção
rotas.get('/instrutores/:id', instrutores.obterInstrutor);//ver um recurso especifico da coleção
rotas.post('/instrutores', instrutores.cadastrarInstrutor);//adicionar recurso dentro de uma coleção
rotas.put('/instrutores/:id', instrutores.editarInstrutor);//editar todo o recurço especifico
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusDoIntrutor);//editar uma parte do recurço escolhido

module.exports = rotas;