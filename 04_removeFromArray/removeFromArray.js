const removeFromArray = function(arr, ...filters) {

  let arrFilter = filters;
  let base = arr;

  let finalResult = base.filter(item => !arrFilter.includes(item))

  return finalResult;
};

// Do not edit below this line
module.exports = removeFromArray;
