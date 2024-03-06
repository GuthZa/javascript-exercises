const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();
  let oldest = people[0];

  people.forEach((person) => {
    let oldest_age =
      (Object.hasOwn(oldest, "yearOfDeath")
        ? oldest.yearOfDeath
        : currentYear) - oldest.yearOfBirth;
    let person_age =
      (Object.hasOwn(person, "yearOfDeath")
        ? person.yearOfDeath
        : currentYear) - person.yearOfBirth;
    oldest = person_age > oldest_age ? person : oldest;
  });
  return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;

//check person has yearOfDeath
//check oldest has yearOfDeath
//check ages
//switch if person_age > oldest_age

//if person or oldest does NOT have yearOfDeath
//use currentYear instead of yearOfDeath
