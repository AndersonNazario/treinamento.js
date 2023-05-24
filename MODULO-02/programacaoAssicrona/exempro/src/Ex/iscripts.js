const { getCityFromZipcode } = require('utils-playground')

//Sicrona
console.log("________________Sicrona______________________",)
console.log("inicio");

for (let i = 0; i <= 5; i++) {
    console.log(i);
}

console.log("Fim");

//Assicrona
console.log("________________Assicrona______________________",)
console.log("inicio");

getCityFromZipcode('04387320').then(cidade => {
    console.log(cidade);
});

console.log("Fim");

