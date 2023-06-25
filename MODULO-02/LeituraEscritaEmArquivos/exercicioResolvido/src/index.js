const express = require('express');
const { listaDeProdutos, vendas } = require('./controladores/vendas');
const app = express();

app.use(express.json())

app.get("/produtos", listaDeProdutos);
app.post("/produtos", vendas);


app.listen(3000);