const { parse } = require("date-fns");
const data = '04/08/1992';
const newData1 = parse('04/08/1992', "dd/MM/yyyy", new Date())
const newData2 = parse(data, "dd/MM/yyyy", new Date())

console.log(newData1);
console.log(newData2);