const express = require('express');
const app = express();
const { getCityFromZipcode } = require('utils-playground');


app.get('/', async (req, res) => {
    const cidade = getCityFromZipcode('04387320');
    const cidade2 = getCityFromZipcode('41256250');

    const promise = await Promise.all([cidade, cidade2]);
    const [resposta1, resposta2] = promise;
    res.send(`A cidade encontarda foi: ${resposta1} e ${resposta2} `)
});

app.listen(3000)