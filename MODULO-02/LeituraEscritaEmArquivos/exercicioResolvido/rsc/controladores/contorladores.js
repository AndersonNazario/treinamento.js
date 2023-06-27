const { writeFile } = require("fs");
const bancoDeDados = require("../bancoDeDados/bancoDeDados")
const fs = require("fs/promises")
const apresentarProdutos = async (req, res) => {
    return res.status(200).json(bancoDeDados);
}

const vendasProdutos = async (req, res) => {
    const { produto_id, quantidade } = req.body;

    const produtoEncontrado = bancoDeDados.find((produto) => {
        return produto.id === Number(produto_id)
    })

    if (!produtoEncontrado) {
        return res.status(404).json({ mensagem: `ID: ${produto_id} não encontardoo` })
    }

    try {
        const vendas = await fs.readFile('./rsc/vendas.json')
        const parseVendas = JSON.parse(vendas);
        parseVendas.vendas.push({
            produto: produtoEncontrado,
            quantidade
        })

        await fs.writeFile("./rsc/vendas.json", JSON.stringify(parseVendas))

        return res.status(201).json('Vendas registradas com sucesso')

    } catch (erro) {
        return res.status(500).json({ mensagem: `Erro no servidor` })
    }
}

module.exports = {
    apresentarProdutos,
    vendasProdutos
}