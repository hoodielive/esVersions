// let fn = () => console.log('Hellerrrrr!'); 
let fn = () => "Hello!"; 
console.log(fn()); 

let fn2 = () => {
  let a = 2; 
  let b = 3; 
  return a + b; 
}
console.log(fn2()); 

// or 
let fn3 = (a, b) =>  a + b 
console.log(fn3(3, 8)); 

setTimeout(() => console.log("Helleeerrrr!"), 1000); 

