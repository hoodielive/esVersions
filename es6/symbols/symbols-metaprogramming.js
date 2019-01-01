// a new primitive type 'Symbol'

//let symbol = Symbol('debug'); // you do not need the new keyword
let symbol = Symbol.for('age'); 
let anotherSymbol = Symbol('debug'); 
console.log(symbol); // [object Symbol]
console.log(anotherSymbol); 
console.log(typeof symbol); 

let obj = {
  name: 'Hoodie-Dude', 
  [symbol]: 22
}

console.log(obj);
console.log(obj[symbol]);
let symbol1 = Symbol.for('age'); 
let symbol2 = Symbol.for('age'); 

console.log(symbol1 == symbol2); 

let person = {
  name: 'Mighty Mouse',
  age: 30,
}

function makeAge(person) {
  let ageSymbol = Symbol.for('age'); 
  person[ageSymbol] = 28; 
} 

makeAge(person); 
console.log(person[symbol1]); 
console.log(person[symbol]);
console.log(person['age']);
