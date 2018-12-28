let obj = {
  name: 'hoodie', 
  age: 27,
  greet: function() {
    console.log("Howdy!!")
  }
}; 

let { name, greet: hello } = obj; 

// greet(); 
// destructuring allows you to do do aliasing as well 
hello(); 
