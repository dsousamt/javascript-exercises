const reverseString = function([...string]) {
  let result = [];

  string.map((item) => result.unshift(item))

  return result.join("");
}

// Do not edit below this line
module.exports = reverseString;
