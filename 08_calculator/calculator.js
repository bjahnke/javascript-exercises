function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function sum(arr) {
  return arr.reduce((sum, elem) => sum + elem, 0);
}

function multiply(arr) {
  return arr.reduce((product, elem) => product * elem, 1);
}

function power(a, b) {
  return a ** b;
}

function factorial(a) {
  let f = 1;
  for (let i = 2; i <= a; i++) {
    f = f * i;
  }
  return f;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
