// Create a function randomInteger(min, max) that generates a random integer number from min to max including both min and max as possible values.

// Any number from the interval min..max must appear with the same probability.

// Examples of its work:

// alert( randomInteger(1, 5) ); // 1
// alert( randomInteger(1, 5) ); // 3
// alert( randomInteger(1, 5) ); // 5

const random = (min, max) => {
  return Math.round(Math.random() * (max - min) + min)
}

// THE ABOVE SOLUTION ALTHOUGH CORRECT - HAS LOW PROBABILITY OF YELDING EDGE NUMBERS. BELOW IS CORRECT ALGO

const randomInt = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min)
}
