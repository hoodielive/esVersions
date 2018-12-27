let numbers = [1,2,3]; 

// let [a, b] = numbers; // reminds me of unpacking tuples in python 
// let [a, ...b] = numbers; 
let [a, b, c, d = 'Default'] = numbers; 
console.log(a);
console.log(b);
console.log(d); 
console.log(numbers);
