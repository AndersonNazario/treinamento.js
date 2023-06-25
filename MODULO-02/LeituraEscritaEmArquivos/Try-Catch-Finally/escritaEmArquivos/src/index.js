const express = require('express');
const fs = require('fs/promises');
const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    const conteudo = "Salve o corinthians";
    await fs.writeFile('./src/dados/b.txt', conteudo);
    res.json('ok');
});

app.post('/', async (req, res) => {
    const { nome, idade } = req.body;

    try {
        const adicionarUsuario = await fs.readFile('./src/dados/usuarios.json')
        //trasforma JSON em .js (JSON.parse(adicionarUsuario);)
        const pessoas = JSON.parse(adicionarUsuario);
        pessoas.push({
            nome,
            idade
        })
        //trasforma .js em JSON  JSON.stringify(pessoas)
        const addPessoaEmJson = JSON.stringify(pessoas)

        //await fs.writeFile - adiciona as informacoes JSON no arquivo JSON
        await fs.writeFile('./src/dados/usuarios.json', addPessoaEmJson)

        return res.json("Pessoa adicionada")
    } catch (erro) {
        return res.json(`Deu erro: ${erro.message}`);
    } finally {
        console.log("Iss sempre sera execultado")
    }
});

app.listen(3000);