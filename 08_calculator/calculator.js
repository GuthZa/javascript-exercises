const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (array) {
  return array.reduce((sum, num) => sum + num, 0);
};

const multiply = function (numbers) {
  return numbers.reduce((product, num) => product * num, 1);
};

const power = function (a, b) {
  return Math.pow(a, b);
};

const factorial = function (a) {

  
  let sum = 1;
  while (a > 0) {
    sum *= a--;
  }
  return sum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
