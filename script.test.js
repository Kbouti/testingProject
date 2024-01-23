const myFunctions = require(`./script.js`);

// ******************************************************************************************
// Sum tests:

test(`sum() adds  1 + 3  to equal 4`, () => {
  expect(myFunctions.sum(1, 3)).toBe(4);
});

// ******************************************************************************************
// Capitalize tests

test(`capitalize() takes "asshole" and returns "Asshole"`, () => {
  expect(myFunctions.capitalize(`asshole`)).toMatch(`Asshole`);
});

test(`capitalize() takes "poop" and returns "Poop"`, () => {
  expect(myFunctions.capitalize(`poop`)).toMatch(`Poop`);
});

// ******************************************************************************************
// ReverseString tests

test(`reverseString() takes in "god" and returns "dog"`, () => {
  expect(myFunctions.reverseString(`god`)).toMatch(`dog`);
});

// ******************************************************************************************
// Calculator tests:

test(`calculator.add() adds  1 + 3  to equal 4`, () => {
  expect(myFunctions.calculator.add(1, 3)).toBe(4);
});

test(`calculator.subtract() subtracts  10 - 3  to equal 7`, () => {
  expect(myFunctions.calculator.subtract(10, 3)).toBe(7);
});

test(`calculator.divide() divides  100 by 2 to equal 50`, () => {
  expect(myFunctions.calculator.divide(100, 2)).toBe(50);
});

test(`calculator.divide() divides  10 by 3  to equal 3.33`, () => {
  expect(myFunctions.calculator.divide(10, 3)).toBeCloseTo(3.33);
});

test(`calculator.multiply() multiplies  10 by 3  to equal 30`, () => {
  expect(myFunctions.calculator.multiply(10, 3)).toBe(30);
});

test(`calculator.multiply() multiplies  10 by 0  to equal 0`, () => {
  expect(myFunctions.calculator.multiply(10, 0)).toBe(0);
});

// ******************************************************************************************
// caesarCipher tests:

test(`Test caesarCipher with "Shitbag, 2"`, () => {
  expect(myFunctions.caesarCipher(`Shitbag`, 2)).toBe(`Ujkvdci`);
});

test(`Test caesarCipher with "dogFart, 3"`, () => {
  expect(myFunctions.caesarCipher(`dogFart`, 3)).toBe(`grjIduw`);
});

test(`Test caesarCipher with "b3wbz, 3"`, () => {
  expect(myFunctions.caesarCipher(`b3wbz`, 3)).toBe(`e3zec`);
});

test(`Test caesarCipher with "yzZ, 1"`, () => {
  expect(myFunctions.caesarCipher(`yzZ`, 1)).toBe(`zaA`);
});

test(`Test caesarCipher with "You're a moron!, 5"`, () => {
  expect(myFunctions.caesarCipher(`You're a moron!`, 5)).toBe(
    `Dtz'wj f rtwts!`
  );
});

// ******************************************************************************************
// analyzeArray tests:

test(`AnalyzeArray with empty array`, () => {
  expect(myFunctions.analyzeArray([]).average).toBe(null);
  expect(myFunctions.analyzeArray([]).min).toBe(null);
  expect(myFunctions.analyzeArray([]).max).toBe(null);
  expect(myFunctions.analyzeArray([]).length).toBe(0);
});

test(`AnalyzeArray with one element`, () => {
  expect(myFunctions.analyzeArray([4]).average).toBe(4);
  expect(myFunctions.analyzeArray([4]).min).toBe(4);
  expect(myFunctions.analyzeArray([4]).max).toBe(4);
  expect(myFunctions.analyzeArray([4]).length).toBe(1);
});

test(`AnalyzeArray with two elements`, () => {
  expect(myFunctions.analyzeArray([4, 2]).average).toBe(3);
  expect(myFunctions.analyzeArray([4, 2]).min).toBe(2);
  expect(myFunctions.analyzeArray([4, 2]).max).toBe(4);
  expect(myFunctions.analyzeArray([4, 2]).length).toBe(2);
});

test(`AnalyzeArray with four elements`, () => {
  expect(myFunctions.analyzeArray([4, 2, 6, 0]).average).toBe(3);
  expect(myFunctions.analyzeArray([4, 2, 6, 0]).min).toBe(0);
  expect(myFunctions.analyzeArray([4, 2, 6, 0]).max).toBe(6);
  expect(myFunctions.analyzeArray([4, 2, 6, 0]).length).toBe(4);
});
