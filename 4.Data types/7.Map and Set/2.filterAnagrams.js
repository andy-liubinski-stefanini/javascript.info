// https://javascript.info/task/filter-anagrams

// Anagrams are words that have the same number of same letters, but in different order.

// For instance:

// nap - pan
// ear - are - era
// cheaters - hectares - teachers

// Write a function aclean(arr) that returns an array cleaned from anagrams.

// For instance:

// let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

// alert( aclean(arr) ); // "nap,teachers,ear" or "PAN,cheaters,era"

// From every anagram group should remain only one word, no matter which one.

// THE SOLUTION OFFERS TO USE MAP TO PAIR ANAGRAMS WITH WORDS

function aclean(arr) {
  const mapOfAnagrams = new Map()
  arr.forEach((word) => {
    const sortedWord = word.toLowerCase().split('').sort().join('')
    mapOfAnagrams.set(sortedWord, word)
  })
  return Array.from(mapOfAnagrams.values())
}

let arr = ['nap', 'teachers', 'cheaters', 'PAN', 'ear', 'era', 'hectares']

console.log(aclean(arr))
