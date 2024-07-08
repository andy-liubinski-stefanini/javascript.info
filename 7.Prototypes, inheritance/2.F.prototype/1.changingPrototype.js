// https://javascript.info/task/changing-prototype

// In the code below we create new Rabbit, and then try to modify its prototype.

// In the start, we have this code:

/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
}

let rabbit = new Rabbit()

console.log(rabbit.eats) // true
*/

//     We added one more string (emphasized). What will alert show now?
/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
}

let rabbit = new Rabbit()

Rabbit.prototype = {}

console.log(rabbit.eats) // ANSWER IS TRUE. ONLY PROTOTYPE WAS CHANGED, PROP IS STILL INTACT
*/

// …And if the code is like this (replaced one line)?
/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
}

let rabbit = new Rabbit()

Rabbit.prototype.eats = false

console.log(rabbit.eats) // ANSWER IS FALSE AS EATS WAS CHANGED TO FALSE
*/

// And like this (replaced one line)?
/*
function Rabbit() {}
Rabbit.prototype = {
  eats: true,
}

let rabbit = new Rabbit()

delete rabbit.eats

console.log(rabbit.eats) // ANSWER IS TRUE BECAUSE EATS IS STORED IN PROTOTYPE, NOT IN THE OBJECT
*/
// The last variant:

function Rabbit() {}
Rabbit.prototype = {
  eats: true,
}

let rabbit = new Rabbit()

delete Rabbit.prototype.eats

console.log(rabbit.eats) // BECAUSE rabbit HAS NO PROP OF EATS - IT ONLY ACCESSES IT IN THE CHAIN. THUS TE ANSWER IS UNDEFINED.
