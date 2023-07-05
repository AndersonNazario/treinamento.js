//dias uteis - segunda a sexta - 
const { addBusinessDays } = require("date-fns");

const data = addBusinessDays(new Date(1992, 7, 4), 10);

console.log(data);
//1992-08-18T03:00:00.000Z
