console.log(`Testing is here`);

function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  string = string.slice(1);
  return firstLetter + string;
}

function reverseString(string) {
  let newString = "";
  let splitString = string.split("");
  for (let i = splitString.length - 1; i >= 0; i--) {
    newString += splitString[i];
  }
  return newString;
}

// **********************************************************************
// Calculator:

let calculator = {};

calculator.add = function (a, b) {
  return a + b;
};

calculator.subtract = function (a, b) {
  return a - b;
};

calculator.divide = function (a, b) {
  let result = a / b;
  return result;
};

calculator.multiply = function (a, b) {
  let result = a * b;
  return result;
};

// **********************************************************************
// caeserCipher

const alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];

function caesarCipher(string, shiftFactor) {
  string = string.toLowerCase();
  let splitString = string.split("");

  console.log(splitString);
  let stringToNumbers = [];

  for (let i = 0; i < splitString.length; i++) {
    for (let j = 0; j < alphabet.length; j++) {
      if (splitString[i] === alphabet[j]) {
        stringToNumbers.push(j);
      }
    }
  }
  console.log(stringToNumbers);
  for (let i = 0; i < stringToNumbers.length; i++) {
    if (stringToNumbers[i] == 25) {
      stringToNumbers[i] == 1;
    } else if (stringToNumbers[i] == 24) {
      stringToNumbers[i] == 0;
    } else {
      stringToNumbers[i] = stringToNumbers + shiftFactor;
    }
  }
  console.log(stringToNumbers);

// I think we want to write a function that we call on each character

}

let regex = /^[a-zA-Z]+$/;

function caesarThisCharacter(character, shiftFactor){
    if (regex.test(character)){
        console.log(`is a character`)
    } else {
        console.log(`is not a character`)
    }
}


caesarCipher(`dogNuts`, 2);
caesarThisCharacter("g", 4);
caesarThisCharacter("$", 4);


let alphabetKey = {
  a: 1,
  b: 2,
  c: 3,
  d: 4,
  e: 5,
  f: 6,
  g: 7,
  h: 8,
  i: 9,
  j: 10,
  k: 11,
  l: 12,
  m: 13,
  n: 14,
  o: 15,
  p: 16,
  q: 17,
  r: 18,
  s: 19,
  t: 20,
  u: 21,
  v: 22,
  w: 23,
  x: 24,
  y: 25,
  z: 26,
};

module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
