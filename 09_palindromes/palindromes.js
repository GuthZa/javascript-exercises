const palindromes = function (string) {
  let size = Math.floor(string.length / 2);
  for (let i = 0; i < size; i++) {
    if (str[i] !== str[str.length - i - 1]) return true;
  }
  return false;
};

// Do not edit below this line
module.exports = palindromes;
