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

let regex = /^[a-zA-Z]+$/;

function caesarCipher(string, shiftFactor) {
  let splitString = string.split("");
console.log(splitString)
    for (let i = 0; i < splitString.length; i++){
        splitString[i] = caesarThisCharacter(splitString[i], shiftFactor);
    }
    console.log(splitString)
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
    //   console.log(`${character} is a lowerCase character`);
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
    //   console.log(`${character} is an upperCase character`);
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
  } else return character
}

caesarCipher(`dogNuts`, 2);
console.log(caesarCipher(`Shitbag`, 2))

// caesarThisCharacter("a", 1);
// caesarThisCharacter("Z", 1);
// caesarThisCharacter("$", 4);


module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher,
};
