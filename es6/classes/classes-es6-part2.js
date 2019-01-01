class Person {
  constructor(name) {
    this._name = name;
  }

  get name() {
    // private function 
    return this._name.toUpperCase(); 
  }
  set name(value) {
    if (value.length > 2) {
      this._name = value; 
    }
    console.log('Rejected!'); 
  }
}

let person = new Person('Larry'); 
console.log(person.name); 
// person.name = 'Ma' // reject
person.name = 'Osun' // return Osun as _name -> [object Object]
console.log(person.name)
