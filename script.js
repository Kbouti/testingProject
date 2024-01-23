// **********************************************************************
// Sum:

function sum(a, b) {
  return a + b;
}

// **********************************************************************
// Capitalize:

function capitalize(string) {
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  string = string.slice(1);
  return firstLetter + string;
}

// **********************************************************************
// ReverseString:

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

let regex = /^[a-zA-Z]+$/;

function caesarCipher(string, shiftFactor) {
  let splitString = string.split("");
  for (let i = 0; i < splitString.length; i++) {
    splitString[i] = caesarThisCharacter(splitString[i], shiftFactor);
  }
  let newString = splitString.join("");
  return newString;
}

function caesarThisCharacter(character, shiftFactor) {
  if (regex.test(character)) {
    let assignedNumber;
    let modifiedNumber;
    let newCharacter;
    let lowerCaseCharacter = character.toLowerCase();
    if (character === lowerCaseCharacter) {
      for (let i = 0; i < alphabet.length; i++) {
        if (lowerCaseCharacter === alphabet[i]) {
          assignedNumber = i;
          modifiedNumber = i + shiftFactor;
          if (modifiedNumber > 25) {
            modifiedNumber = modifiedNumber - 26;
          }
          newCharacter = alphabet[modifiedNumber];
          return newCharacter;
        }
      }
    } else {
      for (let i = 0; i < alphabet.length; i++) {
        if (lowerCaseCharacter === alphabet[i]) {
          assignedNumber = i;
          modifiedNumber = i + shiftFactor;
          if (modifiedNumber > 25) {
            modifiedNumber = modifiedNumber - 26;
          }
          newCharacter = alphabet[modifiedNumber];
          return newCharacter.toUpperCase();
        }
      }
    }
  } else return character;
}

// **********************************************************************
// analyzeArray

function analyzeArray(array) {
  let newObject = {
    average: null,
    min: null,
    max: null,
    length: array.length,
  };
  if (array.length < 1) {
    return newObject;
  }
  newObject.min = array[0];
  newObject.max = array[0];
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
    if (newObject.min > array[i]) {
      newObject.min = array[i];
    }
    if (newObject.max < array[i]) {
      newObject.max = array[i];
    }
  }
  newObject.average = sum / array.length;
  return newObject;
}

let testObject = analyzeArray([4, 2, 45, 2, 6, 7543, 5, 7]);
console.log(testObject);

// **********************************************************************
// Exports:

module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
  analyzeArray,
};
