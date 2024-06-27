// We have an object storing salaries of our team:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }

// Write the code to sum all salaries and store in the variable sum. Should be 390 in the example above.

// If salaries is empty, then the result must be 0.


const sumObjectProperties = function(obj) {
    initial_sum = 0
    for (const key in obj) {
        initial_sum += obj[key]
    }
    return initial_sum
}

let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

console.log(sumObjectProperties(salaries))