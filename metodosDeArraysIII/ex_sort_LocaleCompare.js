const pessoas = ['Rita', 'Larissa', 'pedro', 'Niná', 'Ângelo', 'Anderson'];
console.log(pessoas);

pessoas.sort();
console.log(pessoas);

pessoas.sort((a, b) => {
    return a.localeCompare(b);
});
console.log(pessoas);

