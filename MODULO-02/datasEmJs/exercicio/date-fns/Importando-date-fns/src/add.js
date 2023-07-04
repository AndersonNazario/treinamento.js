const { add } = require("date-fns");

let data = new Date();
console.log(data);

let result = add(new Date(2014, 8, 1, 10, 19, 50), {
    years: 2,
    months: 9,
    weeks: 1,
    days: 7,
    hours: 5,
    minutes: 9,
    seconds: 30,
});
console.log(result);

result = add(result, {
    seconds: 30,
});
console.log(result);
