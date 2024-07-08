/*
As we know, all objects normally inherit from Object.prototype and get access to “generic” object methods like hasOwnProperty etc.

For instance:

class Rabbit {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

// hasOwnProperty method is from Object.prototype
alert( rabbit.hasOwnProperty('name') ); // true

But if we spell it out explicitly like "class Rabbit extends Object", then the result would be different from a simple "class Rabbit"?

What’s the difference?

Here’s an example of such code (it doesn’t work – why? fix it?):

class Rabbit extends Object {
  constructor(name) {
    this.name = name;
  }
}

let rabbit = new Rabbit("Rab");

alert( rabbit.hasOwnProperty('name') ); // Error
*/

/*****************EXPLANATION****************** */

// Despite having been extended from the global Object - child Class still needs to have access to Super method to access parent class constructor

class Rabbit extends Object {
  constructor(name) {
    super() // THIS IS WHAT IS IMPORTANT
    this.name = name
  }
}

let rabbit = new Rabbit('Rab')

console.log(rabbit.hasOwnProperty('name')) // Error
