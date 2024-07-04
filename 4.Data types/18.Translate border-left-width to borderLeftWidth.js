// Write the function camelize(str) that changes dash-separated words like “my-short-string” into camel-cased “myShortString”.

// That is: removes all dashes, each word after dash becomes uppercased.

// Examples:

// camelize("background-color") == 'backgroundColor';
// camelize("list-style-image") == 'listStyleImage';
// camelize("-webkit-transition") == 'WebkitTransition';

// P.S. Hint: use split to split the string into an array, transform it and join back.

function camelize(string) {
  let arrayOfWords = string.split(/[-]/)
  arrayOfWords = arrayOfWords.map((element) => {
    return element.charAt(0).toUpperCase() + element.slice(1)
  })
  const camelizedString = arrayOfWords.reduce((aggregator, element) => {
    return aggregator + element
  })
  return camelizedString.charAt(0).toLowerCase() + camelizedString.slice(1)
}

console.log(camelize('background-color'))
console.log(camelize('-webkit-transition'))
console.log(camelize('list-style-image'))
