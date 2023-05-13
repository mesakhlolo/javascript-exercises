const add = function (a, b) {
  return a + b;
};

const subtract = function (a, b) {
  return a - b;
};

const sum = function (arr) {
  let newNum = 0;
  arr.forEach((num) => {
    newNum += num;
  });

  return newNum;
};

function multiply(arr) {
  let newNum = 1;
  arr.forEach((num) => {
    newNum *= num;
  });

  return newNum;
}

const power = function (a, b) {
  return a ** b;
};

function factorial(num) {
  let result = 1;
  for (let i = num; i >= 1; i--) {
    result *= i;
  }
  return result;
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial,
};
