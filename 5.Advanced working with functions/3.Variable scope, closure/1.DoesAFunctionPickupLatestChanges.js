/*
The function sayHi uses an external variable name. When the function runs, which value is it going to use?

let name = "John";

function sayHi() {
  alert("Hi, " + name);
}

name = "Pete";

sayHi(); // what will it show: "John" or "Pete"?

Such situations are common both in browser and server-side development. A function may be scheduled to execute later than it is created, for instance after a user action or a network request.

So, the question is: does it pick up the latest changes?
*/

let name = 'John'

function sayHi() {
  console.log('Hi, ' + name)
}
sayHi()

name = 'Pete'

/// sayHi WILL USE THE LATEST CHANGE. SO IF ITS CALLED  AFTER THE CHANGE OF NAME VALUE - ITS WILL BE 'PETE', BUT IF BEFORE - IT WILL BE 'JOHN'
