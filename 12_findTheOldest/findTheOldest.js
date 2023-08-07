const findTheOldest = function(arr) {
  let max = 0
  let oldest = null
  for (let i = 0; i < arr.length; i++) {
    let age = null
    if ('yearOfBirth' in arr[i] && 'yearOfDeath' in arr[i]) {
      age = arr[i].yearOfDeath - arr[i].yearOfBirth      
    } else {
      let today = new Date()
      age = today.getFullYear() - arr[i].yearOfBirth
    }
    if (age > max) {
      max = age
      oldest = arr[i]
    }
  }
  return oldest
};

// Do not edit below this line
module.exports = findTheOldest;
