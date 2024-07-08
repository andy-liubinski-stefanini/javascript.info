// https://javascript.info/task/array-unique

// Let arr be an array.

// Create a function unique(arr) that should return an array with unique items of arr.

// For instance:

function unique(arr) {
  /* your code */
}

let strings = [
  'Hare',
  'Krishna',
  'Hare',
  'Krishna',
  'Krishna',
  'Krishna',
  'Hare',
  'Hare',
  ':-O',
]

function unique(array) {
  const temp = []
  for (const item of array) {
    if (!temp.includes(item)) {
      temp.push(item``)
    }
  }
  return temp
}

console.log(unique(strings)) // Hare, Krishna, :-O
