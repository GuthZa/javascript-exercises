const caesar = function (string, shift) {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";

  return string.map((character) => {
    if (alphabet.includes(character))
      character = alphabet.indexOf(character + shift);
  });
};

// Do not edit below this line
module.exports = caesar;
