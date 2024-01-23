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

calculator.subtract = function(a, b){
    return a - b;
}

calculator.divide = function(a, b){
    let result = a / b;
    return result;
}

calculator.multiply = function(a, b){
    let result = a * b;
    return result;
}

// **********************************************************************
// caeserCipher

function caesarCipher(string){

}

let testString = "John"
console.log(testString)
let splitString = testString.split("");
console.log(splitString);

let alphabetKey = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10,
    "k": 11,
    "l": 12,
    "m": 13,
    "n": 14,
    "o": 15,
    "p": 16,
    "q": 17,
    "r": 18,
    "s": 19,
    "t": 20,
    "u": 21,
    "v": 22,
    "w": 23,
    "x": 24,
    "y": 25,
    "z": 26,
}


console.log(alphabetKey.e)
console.log(alphabetKey.find(5))






module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher
};



