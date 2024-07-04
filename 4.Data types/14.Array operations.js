// Create an array styles with items “Jazz” and “Blues”.
const styles = [`Jazz`, `Blues`]
// Append “Rock-n-Roll” to the end.
styles.push(`Rock-n-Roll`)
// Replace the value in the middle with “Classics”. Your code for finding the middle value should work for any arrays with odd length.
styles[Math.floor(styles.length / 2)] = `Classics`
// Strip off the first value of the array and show it.
console.log(styles.shift())
// Prepend Rap and Reggae to the array.
styles.unshift(`Rap`, `Reggae`)

// The array in the process:

// Jazz, Blues
// Jazz, Blues, Rock-n-Roll
// Jazz, Classics, Rock-n-Roll
// Classics, Rock-n-Roll
// Rap, Reggae, Classics, Rock-n-Roll

console.log(styles)
