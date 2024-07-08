// https://javascript.info/task/property-after-delete

// Here’s the code that creates a pair of objects, then modifies them.

// Which values are shown in the process?

let animal = {
  jumps: null,
}
let rabbit = {
  __proto__: animal,
  jumps: true,
}

console.log(rabbit.jumps) // ? (1) TRUE

delete rabbit.jumps

console.log(rabbit.jumps) // ? (2) NULL

delete animal.jumps

console.log(rabbit.jumps) // ? (3) UNDEFINED
