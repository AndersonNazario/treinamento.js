// Import readline module to read input from console
//const readline = require('readline');
const input = `5
3.56 17
-5.1 36.3
0.0002 -2
5 5
-9.01 -17.7 `;


let quebraDeLinha = input.trim().split("\n");
let n = parseInt(quebraDeLinha[0], 10);
let validarXeY = [];
for (let i = 1; i < quebraDeLinha.length; i++) {
    let validarIndice = (quebraDeLinha[i].split(" "));
    validarXeY.push({
        x: parseInt(validarIndice[0], 10),
        y: parseInt(validarIndice[1], 10)
    })
}

console.log(validarXeY);

function calculoDistancia(validarXeY) {
    let distanciaMaxima = 0;
    for (let i = 1; i < validarXeY.length; i++) {
        for (let j = i + 1; j < validarXeY.length; j++) {
            let distancia = Math.sqrt((validarXeY[i].x - validarXeY[j].x) ** 2 + (validarXeY[j].y - validarXeY[i].y) ** 2);
            distanciaMaxima = Math.max(distanciaMaxima, distancia);
        }
    }
    console.log(distanciaMaxima);
}


calculoDistancia(validarXeY);
/*
const input = `3
0 0
0 3
4 0`;

let quebraDeLinha = input.trim().split("\n");
let n = parseInt(quebraDeLinha[0], 10);
let validarXeY = [];
for (let i = 1; i < quebraDeLinha.length; i++) {
  let [x, y] = quebraDeLinha[i].split(" ").map(parseFloat);
  validarXeY.push({ x, y });
}

function calculoDistancia(validarXeY) {
  let distanciaMaxima = 0;
  for (let i = 0; i < validarXeY.length; i++) {
    for (let j = i + 1; j < validarXeY.length; j++) {
      let distancia = Math.sqrt(
        (validarXeY[i].x - validarXeY[j].x) ** 2 + (validarXeY[i].y - validarXeY[j].y) ** 2
      );
      distanciaMaxima = Math.max(distanciaMaxima, distancia);
    }
  }
  console.log(distanciaMaxima);
}

calculoDistancia(validarXeY);
*/

