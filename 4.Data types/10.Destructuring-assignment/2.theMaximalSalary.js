// https://javascript.info/task/max-salary

// There is a salaries object:

// let salaries = {
//   "John": 100,
//   "Pete": 300,
//   "Mary": 250
// };

// Create the function topSalary(salaries) that returns the name of the top-paid person.

//     If salaries is empty, it should return null.
//     If there are multiple top-paid persons, return any of them.

// P.S. Use Object.entries and destructuring to iterate over key/value pairs.

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
}

function topSalary(object) {
  let topWage = 0
  let topEarner = ''

  for (const [name, wage] of Object.entries(object)) {
    if (wage > topWage) {
      topWage = wage
      topEarner = name
    }
  }
  return topEarner
}

console.log(topSalary(salaries))
