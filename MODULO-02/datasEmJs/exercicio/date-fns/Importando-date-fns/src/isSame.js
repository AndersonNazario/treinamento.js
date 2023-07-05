const { isSameDay } = require("date-fns");

const data = new Date();
const data2 = new Date(2023, 6, 3);

const verificarData = isSameDay(data, data2);

console.log(verificarData);
//Ira validar se os dias das datas são iguais.
//retorna um verdadeiro ou falso
// pode ser comparado o ano, mes, dia, hora, segundos, milesimos.
