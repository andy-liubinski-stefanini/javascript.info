/*
https://javascript.info/task/class-constructor-error

Here’s the code with Rabbit extending Animal.

Unfortunately, Rabbit objects can’t be created. What’s wrong? Fix it.

class Animal {

  constructor(name) {
    this.name = name;
  }

}

class Rabbit extends Animal {
  constructor(name) {
    this.name = name;
    this.created = Date.now();
  }
}

let rabbit = new Rabbit("White Rabbit"); // Error: this is not defined
alert(rabbit.name);

*/

class Animal {
  constructor(name) {
    this.name = name
  }
}

class Rabbit extends Animal {
  constructor(name) {
    super() // THIS IS NEEDED TO HAVE AN ACCESS TO PARENT CLASS
    this.name = name
    this.created = Date.now()
  }
}

let rabbit = new Rabbit('White Rabbit') // Error: this is not defined
console.log(rabbit.name)
