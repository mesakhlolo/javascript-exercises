const repeatString = function (string, num) {
  let newString = "";
  if (num >= 0) {
    for (i = 1; i <= num; i++) {
      newString += string;
    }
  } else if (string == "") {
    return "";
  } else {
    return "ERROR";
  }

  return newString;
};

const randomNumber = function () {
  let random = Math.floor(Math.random() * 1000);
  return random;
};

repeatString("hey", randomNumber());

// Do not edit below this line
module.exports = repeatString;
