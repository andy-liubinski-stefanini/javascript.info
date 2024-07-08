// https://javascript.info/task/proto-and-this

// We have rabbit inheriting from animal.

// If we call rabbit.eat(), which object receives the full property: animal or rabbit?

// let animal = {
//   eat() {
//     this.full = true;
//   }
// };

// let rabbit = {
//   __proto__: animal
// };

// rabbit.eat();

let animal = {
  eat() {
    this.full = true
  },
}

let rabbit = {
  __proto__: animal,
}

rabbit.eat()
rabbit.__proto__ = null

console.log(rabbit)

// RABBIT OBJECT FULL PROP BECOMES TRUE. THIS ALWAYS REFERENCE THE OBJECT BEFORE THE DOT
