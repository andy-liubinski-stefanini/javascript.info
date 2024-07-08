// https://javascript.info/task/recipients-read

// There’s an array of messages:

// let messages = [
//   {text: "Hello", from: "John"},
//   {text: "How goes?", from: "John"},
//   {text: "See you soon", from: "Alice"}
// ];

// Your code can access it, but the messages are managed by someone else’s code. New messages are added, old ones are removed regularly by that code, and you don’t know the exact moments when it happens.

// Now, which data structure could you use to store information about whether the message “has been read”? The structure must be well-suited to give the answer “was it read?” for the given message object.

// P.S. When a message is removed from messages, it should disappear from your structure as well.

// P.P.S. We shouldn’t modify message objects, add our properties to them. As they are managed by someone else’s code, that may lead to bad consequences.

//
//

// CAN BE DONE WITH A WEAKSET

const messages = [
  { text: 'Hello', from: 'John' },
  { text: 'How goes?', from: 'John' },
  { text: 'See you soon', from: 'Alice' },
]

const readMessageList = new WeakSet()

function flagRead(message) {
  readMessageList.add(message)
}

function checkIfFlagged(message) {
  return readMessageList.has(message)
}

// EXAMPLE USAGE

flagRead(messages[0])
console.log(checkIfFlagged(messages[0])) // true
console.log(checkIfFlagged(messages[1])) // false

messages.shift()

console.log(checkIfFlagged(messages[0])) // false because the first element now is the one that used to be second and was never flagged
