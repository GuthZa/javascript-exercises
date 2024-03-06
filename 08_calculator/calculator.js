const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (numbers) {
  let sum = 0;
  for (const element of numbers) {
    !isNaN(element) ? (sum += +element) : 0;
  }
  return sum;

  //return array.reduce((total, current) => total + current, 0);
};

const multiply = function (numbers) {
  let sum = 1;
  for (const element of numbers) {
    !isNaN(element) ? (sum *= +element) : 0;
  }
  return sum;

  //return array.reduce((product, current) => product * current);
};

const power = function (a, b) {
  let sum = a;
  for (let i = 1; i < b; i++) {
    sum *= a;
  }
  return sum;

  //return Math.pow(a,b);
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
