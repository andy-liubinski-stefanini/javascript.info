// Write a function printNumbers(from, to) that outputs a number every second, starting from from and ending with to.

// Make two variants of the solution.

//     Using setInterval.
//     Using nested setTimeout.

function printNumbersInterval(from, to) {
  let interval = setInterval(() => {
    if (from === to) {
      clearInterval(interval)
    }
    console.log(from)
    from++
  }, 1000)
}

// printNumbersInterval(1, 5)

function printNumbersTimeout(from, to) {
  setTimeout(function log() {
    console.log(from)

    if (from < to) {
      from++
      setTimeout(log, 1000)
    }
  }, 1000)
}

printNumbersTimeout(1, 5)
