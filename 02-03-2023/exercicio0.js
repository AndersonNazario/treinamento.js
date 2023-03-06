const nomesDePaises = ['Brasil', 'Argentina', 'Bolivia', 'Uruguai', 'Peru'];
console.log(nomesDePaises);


nomesDePaises.push('Finlandia'); //push adicina um item no fim da lista, no caso a finlandia
console.log(nomesDePaises);

//pop retira o ultumo item da lista no caso a Finlandia
nomesDePaises.pop();
console.log(nomesDePaises);

//unshift adicina um item no começo da lista, no caso a Polonia
nomesDePaises.unshift('Polonia');
console.log(nomesDePaises);

//shift remove um item no começo da lista, no caso a Polonia
nomesDePaises.shift();
console.log(nomesDePaises);

//imprimir o ultimo nome da lista
console.log(nomesDePaises[nomesDePaises.length - 1]);

//imprimir o segundo nome da lista
console.log(nomesDePaises[1]);

//imprimir o nome do pais do indice 2
console.log(nomesDePaises[2]);