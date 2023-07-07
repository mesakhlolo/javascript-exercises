const palindromes = function (word) {
  // Remove any non-alphanumeric characters and convert to lowercase
  const cleanedWord = word.toLowerCase().replace(/[^a-z0-9]/g, "");

  // Compare the cleaned word with its reversed version
  const reversedWord = cleanedWord.split("").reverse().join("");
  return cleanedWord === reversedWord;
};

// Do not edit below this line
module.exports = palindromes;
