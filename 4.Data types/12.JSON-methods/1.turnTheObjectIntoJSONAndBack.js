// https://javascript.info/task/serialize-object

// Turn the user into JSON and then read it back into another variable.

// let user = {
//   name: "John Smith",
//   age: 35
// };

let user = {
  name: 'John Smith',
  age: 35,
}

const jsonifiedObj = JSON.stringify(user)

console.log(jsonifiedObj)

const objectifiedJSON = JSON.parse(jsonifiedObj)

console.log(objectifiedJSON)
