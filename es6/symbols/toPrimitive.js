let numbers = [1,2,3]
numbers[Symbol.toPrimitive] = function() {
  return 999; 
}

console.log(numbers + 1)
