// importadas
const express = require('express');
const rotas = express();
const aulas = require('./controladores/aulas')

const instrutores = require('./controladores/instrutores');


rotas.get('/instrutores', instrutores.listarInstrutores);//ver listagem da coleção
rotas.get('/instrutores/:id', instrutores.obterInstrutor);//ver um recurso especifico da coleção
rotas.post('/instrutores', instrutores.cadastrarInstrutor);//adicionar recurso dentro de uma coleção
rotas.put('/instrutores/:id', instrutores.editarInstrutor);//editar todo o recurço especifico
rotas.patch('/instrutores/:id/status', instrutores.atualizarStatusDoIntrutor);//editar uma parte do recurço escolhido
rotas.delete('/instrutores/:id', instrutores.excluirInstrutor)//deletar 


rotas.post('/instrutores/:idInstrutor/aulas', aulas.cadastrarAulas);//adicionar aulas para um instrutor (titulo, descrição)
rotas.get('/aulas', aulas.informarAulas);//deve listar todas aulas da coleção    
rotas.get('/aulas/:id', aulas.informarAulaEspecifica);//deve detalhar as informaçoes de uma aula.
rotas.get('/instrutores/:idInstrutor/aulas', aulas.aulasDoInstrutor);//Deve listar todas as aulas do instrutor


module.exports = rotas;