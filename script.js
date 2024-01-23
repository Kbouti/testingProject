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


module.exports = {
  sum,
  capitalize,
  reverseString,
  calculator,
  caesarCipher
};
