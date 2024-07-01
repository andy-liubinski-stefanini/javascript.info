// Write the function isEmpty(obj) which returns true if the object has no properties, false otherwise.

// Should work like that:

// let schedule = {};

// alert( isEmpty(schedule) ); // true

// schedule["8:30"] = "get up";

// alert( isEmpty(schedule) ); // false

let newObject = new Object()

const isEmpty = function (obj) {
  let number_of_keys = 0
  for (const key in obj) {
    number_of_keys++
  }
  return number_of_keys === 0 ? true : false
}

newObject.someKindaKey = `Here be dragons`

console.log(isEmpty(newObject))
