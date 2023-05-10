let reverseString = function (str) {
  let newString = "";

  if (str === "") {
    return "";
  }
  for (i = str.length - 1; i >= 0; i--) {
    newString += str[i];
  }

  return newString;
};

reverseString("");

// Do not edit below this line
module.exports = reverseString;
