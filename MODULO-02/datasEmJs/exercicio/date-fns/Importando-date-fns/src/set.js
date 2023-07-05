const { set } = require("date-fns");

const data = set(new Date(), { year: 1992 })

console.log(data)
// tem que imprimir a data de hoje, como foi alterado para o ano 1992 o ano que ira aparecer sera o 1992
// pode ser alterado o ano, mes, dia, hora, segundos, milesimos.