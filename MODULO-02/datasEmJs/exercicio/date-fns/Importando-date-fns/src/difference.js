const { differenceInMilliseconds, differenceInBusinessDays } = require("date-fns");

const data = differenceInMilliseconds(
    new Date(1992, 7, 5),
    new Date(1992, 7, 4)
);

console.log(data)
//86400000

const data2 = differenceInBusinessDays(
    new Date(1992, 7, 5),
    new Date(1992, 7, 4)
);

console.log(data2)
//1