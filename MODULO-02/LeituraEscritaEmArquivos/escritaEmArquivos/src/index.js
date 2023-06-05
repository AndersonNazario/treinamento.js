const express = require('express');
//const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (req, res) => {
    res.json('ok');
});


app.listen(3000);