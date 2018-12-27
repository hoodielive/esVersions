let name = 'Aru'; 
let age = 25; 
let ageField = "age"; 

let obj = {
  name, 
  age,
  [ageField]: 28, // dynamic fields 
  greet() {
    return(`${this.name}, ${this.age}`)
    
  },
  "greet me"() {
    return('Has the gift of sight..'); 
    
  },
  
}; 

console.log(obj); 
console.log(obj.greet()); 
console.log(obj["greet me"]()); 
console.log(obj["age"]); // you can still access it with obj.age or obj[ageField]; 
