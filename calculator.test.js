const myObject = require("./calculator.js");

test(`sum() adds  1 + 3  to equal 4`, () =>{
    expect(myObject.calculator.sum(1, 3)).toBe(4);
})