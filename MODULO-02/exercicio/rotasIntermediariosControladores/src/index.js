const express = require('express');
const app = express();

const { listagemCarro,
    obterCarro } = require('./controladores/carros');

app.get('/carros', listagemCarro);
app.get('/carros/:id', obterCarro);

app.listen(3000);