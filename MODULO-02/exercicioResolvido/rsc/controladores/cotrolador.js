const bamcoDeDados = require("../bancoDeDados/bancoDeDados")

const apresentarProdutos = (req, res) => {
    return res.status(200).json(bamcoDeDados);
}


module.exports = {
    apresentarProdutos,
}