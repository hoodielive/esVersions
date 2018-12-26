let button = document.querySelector("button"); 

let fn2 = () => console.log(this); 

function fn() {
  console.log(this)
}; 

button.addEventListener('click', fn2); // this will refer not to the window object as in fn2 but to the context (button)
