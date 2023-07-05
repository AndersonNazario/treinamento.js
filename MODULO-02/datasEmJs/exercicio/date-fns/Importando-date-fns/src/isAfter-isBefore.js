const { isAfter, isBefore } = require("date-fns");

const data = isAfter(
    new Date(1992, 7, 5),
    new Date(1992, 7, 4)
);

console.log(data)
//true 
//valida se a primira data vem depois sa segunada data

const data2 = isBefore(
    new Date(1992, 7, 5),
    new Date(1992, 7, 4)
);

console.log(data2)
//false
//valida se a primira data vem antes da segunada data


