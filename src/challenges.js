// Desafio 1
function compareTrue(param1, param2) {
  if (param1 === true && param2 === true) {
    return true;
  }
  return false;
}
// Desafio 2
function calcArea(base, altura) {
  return (base * altura) / 2;
}

// Desafio 3
function splitSentence(string) {
  let split = string.split(' ');
  return split;
}

// Desafio 4
function concatName(array) {
  return array[array.length - 1] + ', ' + array[0];
}

// Desafio 5
function footballPoints(wins, ties) {
  let winPoints = 0;
  for (let index = 0; index <= wins - 1; index = index + 1) {
    winPoints = winPoints + 3
  }
  for (let index2 = 0; index2 <= ties - 1; index2 = index2 + 1) {
    winPoints = winPoints + 1
  }
  return winPoints
}

// Desafio 6
function highestCount(arraynumbers) {
  let contador = 0;
  let maiorNumero = arraynumbers[0];
  for (let index = 0; index < arraynumbers.length; index = index + 1) {
    if (arraynumbers[index] > maiorNumero) { maiorNumero = arraynumbers[index] }
  }
  for (let index2 = 0; index2 < arraynumbers.length; index2++) {
    if (maiorNumero == arraynumbers[index2]) {
      contador = contador + 1
    }
  }
  return contador
}


// Desafio 7
function catAndMouse() {
  // seu código aqui
}

// Desafio 8
function fizzBuzz() {
  // seu código aqui
}

// Desafio 9
function encode() {
  // seu código aqui
}
function decode() {
  // seu código aqui
}

// Desafio 10
function techList() {
  // seu código aqui
}

module.exports = {
  calcArea,
  catAndMouse,
  compareTrue,
  concatName,
  decode,
  encode,
  fizzBuzz,
  footballPoints,
  highestCount,
  splitSentence,
  techList,
};
