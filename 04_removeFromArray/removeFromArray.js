const removeFromArray = function (Array, ...characterToRemove) {
  for (let index = 0; index < Array.length; index++) {
    if (characterToRemove.includes(Array[index])) {
      Array.splice(index, 1);
      index--;
    }
  }
  return Array;
};

// Do not edit below this line
module.exports = removeFromArray;
