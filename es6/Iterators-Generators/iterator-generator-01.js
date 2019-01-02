/** iterators - loop & generators - yield values */

let array = [1,2,3];

array[Symbol.iterator] = function() {
  return {
    next: function() {
      return {
        done: false, 
        value: 10
      }
    }
  }
}

let it = array[Symbol.iterator](); 

console.log(it);
console.log(it.next());
console.log(it.next());
console.log(it.next());
console.log(it.next());
// console.log(typeof array[Symbol.iterator]); 
