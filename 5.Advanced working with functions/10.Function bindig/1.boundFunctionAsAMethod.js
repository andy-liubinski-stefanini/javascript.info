// https://javascript.info/task/write-to-object-after-bind

// What will be the output?

function f() {
  alert(this) // ?
}

let user = {
  g: f.bind(null),
}

user.g()

// OUTPUT IS NULL
