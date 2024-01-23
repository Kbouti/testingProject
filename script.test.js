// const sum = require(`./script.js`);
// const capitalize = require(`./script.js`);


const myFunctions = require(`./script.js`);



test(`sum() adds  1 + 3  to equal 4`, () =>{
    expect(myFunctions.sum(1, 3)).toBe(4);
})


test(`capitalize() takes "asshole" and returns "Asshole"`, () =>{
    expect(myFunctions.capitalize(`asshole`)).toMatch(`Asshole`);
})

test(`capitalize() takes "poop" and returns "Poop"`, () =>{
    expect(myFunctions.capitalize(`poop`)).toMatch(`Poop`);
})

test(`reverseString() takes in "god" and returns "dog"`, () => {
    expect(myFunctions.reverseString(`god`)).toMatch(`dog`);
})


test(`calculator.sum() adds  1 + 3  to equal 4`, () =>{
    expect(myFunctions.calculator.add(1, 3)).toBe(4);
})