const ontem1 = new Date(1992, 7, 4, 12);
const ontem2 = new Date(1992, 7, 4, 12);
const ontem3 = new Date(1992, 7, 5, 12);

console.log(+ontem1 === +ontem2); //true
console.log("");

console.log(+ontem1 < +ontem3); //true
console.log(+ontem1 > +ontem3); //false
console.log(+ontem1 === +ontem3); //false
console.log(+ontem1 !== +ontem3); //true




