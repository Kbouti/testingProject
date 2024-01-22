const sum = require(`./script`);

test(`adds  1 + 3  to equal 4`, () =>{
    expect(sum(1, 3)).toBe(4);
})


test(`takes "asshole" and returns "Asshole"`, () =>{
    expect(capitalize(`asshole`)).toMatch(`Asshole`);
})