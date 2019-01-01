class Helper {
  static logTwice(message) {
    console.log(message);
    console.log(message);
  }
}

// you do not need to instaniate this class because you used the 'static' keyword
Helper.logTwice('Logged!'); 

class Person {
  constructor(name) {
    this.name = name
  }

  greet() {
    console.log('Howdy!, my name is ' + this.name + ' and I am ' + this.age); 
  }
}

class Dude extends Person {
  constructor(age) {
    super( 'Jon Jones' ); 
    this.age = age;
  }
  greet() {
    console.log('Today is ah....')
  }
  greetTwice() {
    this.greet(); 
    super.greet( 'Hooded' ); 
  }
}

let person = new Person( "hoodie" ); 
person.greet(); 

let dude = new Dude( 31 ); 
dude.greetTwice(); 

console.log(person.__proto__ == Object.prototype); 
console.log(person.__proto__ == Object); 
console.log(person.__proto__ == Person.prototype); 
console.log(dude.__proto__ == Dude.prototype); 
