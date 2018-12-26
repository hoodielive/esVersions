function isEqualTo(number, compare = 10) {
  console.log(number); 
  return number == compare;
}

console.log(isEqualTo(10, 10)); // true but if you remove a value it will become false
console.log(isEqualTo(10)); // true but if you remove a value it will become false - so set compare = 0 and it will still be false 
// lol - because 0 is falsy; so set compare to 10


