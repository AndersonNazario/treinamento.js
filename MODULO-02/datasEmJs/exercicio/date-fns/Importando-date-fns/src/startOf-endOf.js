const { startOfDay, endOfDay } = require("date-fns");

const data = startOfDay(new Date(1992, 7, 5, 11, 55, 0));

console.log(data)
//1992-08-05T03:00:00.000Z

const data2 = endOfDay(new Date(1992, 7, 5, 11, 55, 0));

console.log(data2)
//1992-08-06T02:59:59.999Z