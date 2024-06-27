// An integer number greater than 1 is called a prime if it cannot be divided without a remainder by anything except 1 and itself.

// In other words, n > 1 is a prime if it can’t be evenly divided by anything except 1 and n.

// For example, 5 is a prime, because it cannot be divided without a remainder by 2, 3 and 4.

// Write the code which outputs prime numbers in the interval from 2 to n.

// For n = 10 the result will be 2,3,5,7.

// P.S. The code should work for any n, not be hard-tuned for any fixed value.

const ceiling = parseInt(
  prompt(`Enter the number you want to be the maximum one: `)
)

const checkIfPrime = function (i) {
  for (let ii = 2; ii < i; ii++) {
    if (i % ii === 0) return false
  }
  return true
}

const runThroughAllNumbers = function (number) {
  const arrayOfPrimes = new Array()
  for (let i = 2; i <= number; i++) {
    if (checkIfPrime(i)) {
      arrayOfPrimes.push(i)
    }
  }
  return arrayOfPrimes
}

const arrayOfPrimes = runThroughAllNumbers(ceiling)

console.log(arrayOfPrimes)
alert(`Prime numbers less than ${ceiling} are ${arrayOfPrimes}`)
