// https://javascript.info/task/spy-decorator

// Create a decorator spy(func) that should return a wrapper that saves all calls to function in its calls property.

// Every call is saved as an array of arguments.

// For instance:

// function work(a, b) {
//   alert( a + b ); // work is an arbitrary function or method
// }

// work = spy(work);

// work(1, 2); // 3
// work(4, 5); // 9

// for (let args of work.calls) {
//   alert( 'call:' + args.join() ); // "call:1,2", "call:4,5"
// }

// P.S. That decorator is sometimes useful for unit-testing. Its advanced form is sinon.spy in Sinon.JS library.

function work(a, b) {
  console.log(a + b) // work is an arbitrary function or method
}

function spy(func) {
  function wrapper(...args) {
    wrapper.calls.push(args)
    return func.apply(this, args)
  }
  wrapper.calls = []

  return wrapper
}

work = spy(work)

work(1, 2) // 3
work(4, 5) // 9

for (let args of work.calls) {
  console.log('call:' + args.join()) // "call:1,2", "call:4,5"
}
