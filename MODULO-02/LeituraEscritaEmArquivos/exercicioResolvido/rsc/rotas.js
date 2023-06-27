const express = require("express");
const rota = express();
const { apresentarProdutos, vendasProdutos } = require("./controladores/contorladores");

rota.get("/produtos", apresentarProdutos)
rota.post("/produtos", vendasProdutos)

module.exports = rota;
