const fs = require('fs/promises');

(async function () {
    const arquivosJson = await fs.readFile('./teste.json');
    const pessoas = JSON.parse(arquivosJson);
    console.log(arquivosJson.toString());
    console.log("--------------")
    console.log("Trasformando o testo em objeto: ", pessoas[0].nome)
    console.log("--------------");
    console.log(pessoas);
    console.log("-------------");
    pessoas.push({
        nome: 'Thayna',
        idade: 26
    })
    console.log(pessoas);
    //transformar em arquivo json stringify
    const arrayJson = JSON.stringify(pessoas);
    console.log("--------------")
    console.log(arrayJson);
})();