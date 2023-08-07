const getTheTitles = function(array) {
  let titlesArr = array.map((item) => item.title)
  return titlesArr
};

const books = [
  {
    title: 'Book',
    author: 'Name'
  },
  {
    title: 'Book2',
    author: 'Name2'
  }
]

console.log(getTheTitles(books))

// Do not edit below this line
module.exports = getTheTitles;
