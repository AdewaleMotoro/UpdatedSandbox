var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.

function double(x) {
  return x * 2;
}
const newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
var mynumbers = [3, 56, 2, 48, 5];

function myFilter(x) {
  return x > 10;
}
const newFilter = mynumbers.filter(myFilter);
console.log(newFilter);

//Reduce - Accumulate a value by doing something to each item in an array.

var upNumbers = [3, 56, 2, 48, 5];

function myUp(accumulator, currentNumber) {
  console.log("accumulator =" + accumulator);
  console.log("currentNumber =" + currentNumber);

  return accumulator * currentNumber;
}

const newUpNumbers = upNumbers.reduce(myUp);

console.log(newUpNumbers);

//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
