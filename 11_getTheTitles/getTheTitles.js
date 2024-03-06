const getTheTitles = function (books) {
  let title = "title";
  let titles = new Array();
  books.forEach((element) => {
    titles.push(element[title]);
  });
  return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
