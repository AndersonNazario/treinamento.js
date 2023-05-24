const express = require('express');
const app = express();
const { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground');


app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('04387320');
    const cidade2 = getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade, cidade2]);
    const [resposta1, resposta2] = promise;
    res.send(`A cidade encontarda foi: ${resposta1} e ${resposta2} `)
});

app.get('/pacote/:nomePacote', async (req, res) => {
    const { nomePacote } = req.params;

    const desclicaoDoPacote = await getPackageDescriptionNpm(nomePacote);

    return res.send(desclicaoDoPacote);
})

app.listen(3000)