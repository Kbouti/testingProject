// const sum = require(`./script.js`);
// const capitalize = require(`./script.js`);


const myFunctions = require(`./script.js`);



test(`adds  1 + 3  to equal 4`, () =>{
    expect(myFunctions.sum(1, 3)).toBe(4);
})


test(`takes "asshole" and returns "Asshole"`, () =>{
    expect(myFunctions.capitalize(`asshole`)).toMatch(`Asshole`);
})