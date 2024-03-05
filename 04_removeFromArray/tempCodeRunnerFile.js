const removeFromArray = function (Array, ...characterToRemove) {
  characterToRemove.forEach(function (element, index) {
    console.log(`Element ${element}, Index ${index}`);
    if (Array.includes(element)) Array.splice(index);
  });
  return Array;
};

// Do not edit below this line
module.exports = removeFromArray;
