const express = require("express");
const rota = express();
const { apresentarProdutos } = require("./controladores/cotrolador");

rota.get("/produtos", apresentarProdutos)

module.exports = rota;
