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
function catAndMouse(mouse, cat1, cat2) {
  let distancia1 = mouse - cat1;
  let distancia2 = mouse - cat2;
  if (mouse - cat1 === mouse - cat2) { return 'os gatos trombam e o rato foge' }
  else if (distancia2 > distancia1) {
    return 'cat2'
  }
  else return 'cat1'
}

// Desafio 8
function fizzBuzz(numbers) {
  let array = []
  for (let index = 0; index <= numbers.length - 1; index = index + 1) {
    if (numbers[index] % 3 == 0 && numbers[index] % 5 == 0) {
      array.push('fizzBuzz')
    }
    else if (numbers[index] % 3 == 0 && numbers[index] % 5 !== 0) {
      array.push('fizz')
    }
    else if (numbers[index] % 3 !== 0 && numbers[index] % 5 == 0) {
      array.push('buzz')
    }
    else if (numbers[index] % 3 !== 0 && numbers[index] % 5 !== 0) {
      array.push('bug!')
    }
  }
  return array
}

// Desafio 9
function encode(strings) {
  palavra = ''
for (let index = 0; index <= strings.length -1; index = index + 1){
if (strings[index] == 'a'){
palavra = palavra + '1'
}
else if (strings[index] == 'e'){
palavra = palavra + '2'
}
else if (strings[index] == 'i'){
palavra = palavra + '3'
}
else if (strings[index] == 'o'){
palavra = palavra + '4'
}
else if (strings[index] == 'u'){
palavra = palavra + '5'
}
else palavra = palavra + strings[index]
}
return palavra
}
function decode(strings) {
  palavra = ''
  for (let index = 0; index <= strings.length - 1; index = index + 1) {
      if (strings[index] == 1) {
          palavra = palavra + 'a'
      }
      else if (strings[index] == 2) {
          palavra = palavra + 'e'
      }
      else if (strings[index] == 3) {
          palavra = palavra + 'i'
      }
      else if (strings[index] == 4) {
          palavra = palavra + 'o'
      }
      else if (strings[index] == 5) {
          palavra = palavra + 'u'
      }
      else palavra = palavra + strings[index]
  }
  return palavra
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
