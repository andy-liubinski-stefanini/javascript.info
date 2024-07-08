// https://javascript.info/task/sort-objects

// Write the function sortByAge(users) that gets an array of objects with the age property and sorts them by age.

// For instance:

const john = { name: 'John', age: 25 }
const pete = { name: 'Pete', age: 30 }
const mary = { name: 'Mary', age: 28 }

const arr = [pete, john, mary]

function sortByAge(array) {
  array.sort((a, b) => a.age - b.age)
}

sortByAge(arr)

// now: [john, mary, pete]
alert(arr[0].name) // John
alert(arr[1].name) // Mary
alert(arr[2].name) // Pete
