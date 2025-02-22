// The sequence of Fibonacci numbers has the formula Fn = Fn-1 + Fn-2. In other words, the next number is a sum of the two preceding ones.

// First two numbers are 1, then 2(1+1), then 3(1+2), 5(2+3) and so on: 1, 1, 2, 3, 5, 8, 13, 21....

// Fibonacci numbers are related to the Golden ratio and many natural phenomena around us.

// Write a function fib(n) that returns the n-th Fibonacci number.

// An example of work:

// function fib(n) { /* your code */ }

// alert(fib(3)); // 2
// alert(fib(7)); // 13
// alert(fib(77)); // 5527939700884757

// P.S. The function should be fast. The call to fib(77) should take no more than a fraction of a second.

// AS ALSO MENTIONED IN SOLUTION - RECURSION WILL QUICKLY OVERWHELM THE CALL STACK AND SHOULD NOT BE USED IN THIS PROGRAM. LOOP IS MUCH MORE EFFICIENT WITH MEMORY AND PROCESSING POWER WITH O(n)

function fib(n) {
  let a = 1
  let b = 1
  for (let i = 3; i <= n; i++) {
    let c = a + b
    a = b
    b = c
  }
  return b
}

console.log(fib(3))
console.log(fib(7))
console.log(fib(77))
