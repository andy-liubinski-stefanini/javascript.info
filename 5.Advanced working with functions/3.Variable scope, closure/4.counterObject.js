// Here a counter object is made with the help of the constructor function.

// Will it work? What will it show?

// function Counter() {
//   let count = 0;

//   this.up = function() {
//     return ++count;
//   };
//   this.down = function() {
//     return --count;
//   };
// }

// let counter = new Counter();

// alert( counter.up() ); // ?
// alert( counter.up() ); // ?
// alert( counter.down() ); // ?

function Counter() {
  let count = 0

  this.up = function () {
    return ++count
  }
  this.down = function () {
    return --count
  }
}

let counter = new Counter()

console.log(counter.up()) // ?
console.log(counter.up()) // ?
console.log(counter.down()) // ?

// FUNCTION HAS ITS OWN "THIS" AND THUS CAN BE USED AS CLASSES. BOTH METHODS HAVE ACESS TO THE INNER LEXICAL SCOPE OF THE FUNCTION
