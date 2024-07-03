// https://javascript.info/task/throttle

function f(a) {
  console.log(a)
}

function throttle(funct, ms) {
  let savedArgs,
    savedThis,
    trottled = false

  function wrapper() {
    if (trottled) {
      savedArgs = arguments
      savedThis = this
      return
    }
    trottled = true

    funct.apply(this, arguments)

    setTimeout(() => {
      trottled = false
      if (savedArgs) {
        wrapper.apply(savedThis, savedArgs)
        savedArgs = savedThis = null
      }
    }, ms)
  }
  return wrapper
}

// f1000 passes calls to f at maximum once per 1000 ms
let f1000 = throttle(f, 1000)

f1000(1) // shows 1
f1000(2) // (throttling, 1000ms not out yet)
f1000(3) // (throttling, 1000ms not out yet)

// when 1000 ms time out...
// ...outputs 3, intermediate value 2 was ignored
