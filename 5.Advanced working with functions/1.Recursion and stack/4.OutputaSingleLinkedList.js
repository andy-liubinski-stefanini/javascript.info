/*
Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

Write a function printList(list) that outputs list items one-by-one.

Make two variants of the solution: using a loop and using recursion.

What’s better: with recursion or without it?
*/

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null,
      },
    },
  },
}

// function printListRecursion(list) {
//   console.log(list.value)
//   if (list.next !== null) {
//     printList(list.next)
//   }
// }

// console.log(printListRecursion(list))

function printListLoop(list) {
  while (list) {
    console.log(list.value)
    list = list.next
  }
}

console.log(printListLoop(list))
