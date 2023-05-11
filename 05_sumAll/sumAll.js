function sumAll(num1, num2) {

  if (num1 < 0 || num2 < 0) return "ERROR";
  if (!Number.isInteger(num1 && num2)) return "ERROR";

  const minNum = Math.min(num1, num2);
  const maxNum = Math.max(num1, num2);

  let sum = 0;
  for (let i = minNum; i <= maxNum; i++) {
    sum += i;
  }

  return sum;
}

// Do not edit below this line
module.exports = sumAll;
