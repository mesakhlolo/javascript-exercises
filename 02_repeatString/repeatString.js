const repeatString = function (string, num) {
  let newString = "";
  for (i = 1; i <= num; i++) {
    newString += string;
  }

  return newString;
};

repeatString("hey", 3);

// Do not edit below this line
module.exports = repeatString;
