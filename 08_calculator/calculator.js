const add = function(n1, n2) {
	return n1 + n2
};

const subtract = function(n1, n2) {
	return n1 - n2
};

const sum = function(arr) {
	let sum = 0
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];    
  }
  return sum
};

const multiply = function(n1, ...arr) {
  let result = n1
  for (let i = 0; i < arr.length; i++) {
    result *= arr[i]
  }
  return result
};

const power = function(n1, n2) {
	let result = n1
  for (let i = 1; i < n2; i++) {
    result = n1 * result
  }
  return result
};

const factorial = function(n) {
	let result = null
  if (n === 0 || n === 1) {
    return 1
  } else{
    for (let i = 1; i < n; i++) {
      result = n * factorial(n - 1)      
    }
    return result
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
