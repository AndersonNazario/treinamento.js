const { format } = require("date-fns");

const data = new Date(2017, 3, 12);

console.log(format(data, "dd-MMMM-yyyy"));//12-April-2017
console.log(format(data, "dd/MMMM/yyyy"));//12/April/2017
console.log(format(data, "dd 'de' MMMM 'de' yyyy"));//12 de April de 2017