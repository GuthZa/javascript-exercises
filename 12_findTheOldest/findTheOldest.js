const findTheOldest = function (people) {
  let currentYear = new Date().getFullYear();
  return people.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const personAge = getAge(
      currentPerson.yearOfBirth,
      currentPerson.yearOfDeath
    );
    return oldestAge > personAge ? currentPerson : oldest;
  });
};

const getAge = function (birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};

// Do not edit below this line
module.exports = findTheOldest;

//check person has yearOfDeath
//check oldest has yearOfDeath
//check ages
//switch if person_age > oldest_age

//if person or oldest does NOT have yearOfDeath
//use currentYear instead of yearOfDeath
