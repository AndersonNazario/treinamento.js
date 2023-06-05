const produtos = require('../bancoDedados');

const listaDeProdutos = async (req, res) => {
    return res.status(200).json(produtos)
}

const vendas = async (req, res) => {

}

module.exports = {
    listaDeProdutos,
    vendas
}