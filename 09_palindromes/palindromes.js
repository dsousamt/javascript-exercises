const palindromes = function (string) {
  let str = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
  let reversedStr = string.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').reverse()
  if (str == reversedStr.join('')) {
    return true
  } else {
    return false
  }
};

// Do not edit below this line
module.exports = palindromes;
