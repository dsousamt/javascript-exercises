const sumAll = function(number1, number2) {
  
  let finalResult = null;

  if (typeof(number1) == "number" && typeof(number2) == "number") {
    if (number1 < 0 || number2 < 0) {
      return "ERROR";
    } else if (number2 > number1) {
      finalResult = number2;
      for (let i = number2; i >= number1; i--) {
        finalResult += i - 1;
      }
    } else if (number1 > number2) {
      finalResult = number1;
      for (let i = number1; i >= number2; i--) {
        finalResult += i - 1;
      }
    }
  } else {
    
    
    return "ERROR";
  }

  return finalResult;
};

// Do not edit below this line
module.exports = sumAll;
