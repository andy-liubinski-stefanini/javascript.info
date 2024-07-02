// Write function sum that works like this: sum(a)(b) = a+b.

// Yes, exactly this way, using double parentheses (not a mistype).

// For instance:

// sum(1)(2) = 3
// sum(5)(-1) = 4

// I WAS SURPRISED THAT CLOSURES CAN BE USED IN SUCH A WAY. i HAVE LOOKED UP IN THE SOLUTION

function sum(a) {
  return function (b) {
    return a + b
  }
}

console.log(sum(1)(2))
console.log(sum(5)(-1))
