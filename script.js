console.log(`Testing is here`)

function sum(a, b) {
  return a + b;
}

function capitalize(string) {
  let firstLetter = string.charAt(0);
  firstLetter = firstLetter.toUpperCase();
  string = string.slice(1);
  return firstLetter + string;
}

console.log(capitalize(`asshole`))

module.exports = {
    sum,
    capitalize
}

