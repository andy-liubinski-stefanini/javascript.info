// Write an if condition to check that age is NOT between 14 and 90 inclusively.

// Create two variants: the first one using NOT !, the second one – without it.

let age = prompt('Enter age: ')

if (!(age >= 14 && age <= 90)) alert('Age is NOT within 14 to 90')

// OR

let age1 = prompt('Enter age: ')

if (age1 <= 14 && age1 >= 90) alert('Age is NOT within 14 to 90')
