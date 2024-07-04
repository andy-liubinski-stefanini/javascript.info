// Look at the code. What will be the result of the call at the last line?

// let phrase = "Hello";

// if (true) {
//   let user = "John";

//   function sayHi() {
//     alert(`${phrase}, ${user}`);
//   }
// }

// sayHi();

let phrase = 'Hello'

if (true) {
  let user = 'John'

  function sayHi() {
    alert(`${phrase}, ${user}`)
  }
}

sayHi()

// FUNCTION IS ONLY ACCCESIBLE INSIDE THE BLOCK IT WAS DECLARED IN. GLOBAL SCOPE DOES NOT SEE IT AND CANNOT CALL IT
