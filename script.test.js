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
  expect(myFunctions.calculator.divide(10, 3)).toBe(3.33);
});
