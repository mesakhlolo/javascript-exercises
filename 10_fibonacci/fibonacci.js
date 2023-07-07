const fibonacci = function (n) {
  if (n < 0) return "OOPS";
  if (n <= 2) {
    return 1;
  } else {
    let sum = 0;
    let a = 1;
    let b = 1;

    for (let i = 3; i <= n; i++) {
      sum = a + b;
      a = b;
      b = sum;
    }

    return sum;
  }
};

// Do not edit below this line
module.exports = fibonacci;
