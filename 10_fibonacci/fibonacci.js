const fibonacci = function(count) {
  if (count == 1 || count == 2) {
    return 1
  } else if ( count < 1){
    return 'OOPS'
  } else {
    let fib = null
    for (let i = 3; i <= count; i++) {
      fib = fibonacci(i - 1) + fibonacci(i - 2)      
    }
    return fib
  }
};

// Do not edit below this line
module.exports = fibonacci;
