// https://javascript.info/task/destruct-user

// We have an object:

// let user = {
//   name: "John",
//   years: 30
// };

// Write the destructuring assignment that reads:

//     name property into the variable name.
//     years property into the variable age.
//     isAdmin property into the variable isAdmin (false, if no such property)

// Here’s an example of the values after your assignment:

// let user = { name: "John", years: 30 };

// // your code to the left side:
// // ... = user

// alert( name ); // John
// alert( age ); // 30
// alert( isAdmin ); // false

const user = {
  name: 'John',
  years: 30,
}

const { name, years, isAdmin = false } = user

console.log(name)
console.log(years)
console.log(isAdmin)
