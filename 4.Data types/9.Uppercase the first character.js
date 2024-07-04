// Write a function ucFirst(str) that returns the string str with the uppercased first character, for instance:

// ucFirst("john") == "John";

const ucFirst = function (string) {
  return `${string[0].toUpperCase()}${string.slice(1)}`
}

console.log(ucFirst(`theory`))
