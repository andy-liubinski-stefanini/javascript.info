// Output a single-linked list from the previous task Output a single-linked list in the reverse order.

// Make two solutions: using a loop and using a recursion.

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

/*
function reverseLinkedListLoop(list) {
  const tempArray = []
  while (list) {
    tempArray.push(list.value)
    list = list.next
  }
  tempArray
    .slice()
    .reverse()
    .forEach((element) => console.log(element))
}

reverseLinkedListLoop(list)
*/

function reverseLinkedListRecursion(list) {
  if (list.next) {
    reverseLinkedListRecursion(list.next)
  }

  console.log(list.value)
}

reverseLinkedListRecursion(list)

// SAME AS WITH PREVIOUS EXCERSISE RECURSION WILL CREATE A LONG STACK OF FUNCTIONS THAT WAIT FOR THE PREVIOUS TO FINISH EXECUTING. LOOP OPTION HAS SPACE COMPLEXITY OF O(1), RECURSION - O(N)
