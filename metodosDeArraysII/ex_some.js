const extensao = ['oi.pdf', 'bomDia.jpg', 'bomdi.txt', 'virus.batt'];
const extensaoProibida = '.bat';

function validarVirus(extensao) {
    for (let i = 0; i < extensao.length; i++) {
        if (extensao[i].slice(extensao[i].indexOf('.')) === extensaoProibida) {
            return console.log('Virus detectado')
        }
    }
    console.log('Nenhum virus detectado')
}


validarVirus(extensao);
