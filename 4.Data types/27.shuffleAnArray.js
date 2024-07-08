// https://javascript.info/task/shuffle

// Write the function shuffle(array) that shuffles (randomly reorders) elements of the array.

// Multiple runs of shuffle may lead to different orders of elements. For instance:

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0]

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let rand = Math.floor(Math.random() * (i + 1))

    ;[array[i], array[rand]] = [array[rand], array[i]]
  }
  return array
}

console.log(shuffle(arr))
// arr = [3, 2, 1]

//shuffle(arr)
// arr = [2, 1, 3]

//shuffle(arr)
// arr = [3, 1, 2]
// ...

// All element orders should have an equal probability. For instance, [1,2,3] can be reordered as [1,2,3] or [1,3,2] or [3,1,2] etc, with equal probability of each case.
