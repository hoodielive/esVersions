const AGE = 30;  // global 

if (true) {
  const AGE = 32;  // local scope  
  console.log(AGE); 
}
// AGE = 31; // error const can't be changed
console.log(AGE) 

const AGES = [28, 29, 30]; 
console.log(AGES); 

AGES.push(25);  // this works because the "pointer" is not being changed - just the object. 

console.log(AGES); 
