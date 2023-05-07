const express = require('express');
const app = express();

//controladores
const { listagemCarro,
    obterCarro
} = require('./controladores/carros');

//intermediario
//const { validarSenha
//} = require('./intermediarios');

//intermediario 
//app.use(validarSenha);//é usado o use();

//controladores
app.get('/carros', listagemCarro);
app.get('/carros/:id', obterCarro);

app.listen(3000);
