const hoje = new Date();
console.log(hoje); // dia de hoje

hoje.setDate(hoje.getDate() - 1); // um dia antes
console.log(hoje);

console.log(hoje.getDay()); // mes 

console.log(hoje.getFullYear()); // ano XXXX

console.log(hoje.getDate()); // dia