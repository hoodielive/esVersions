let numbers = [1,2,3,4,5]; 

console.log(Math.max(numbers));  // this will return NaN because it expects numbers not an array/object
console.log(Math.max(...numbers)); // this will return 5 because its spreading the values | thus split array into a list of values
