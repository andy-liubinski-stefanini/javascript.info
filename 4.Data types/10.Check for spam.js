// Write a function checkSpam(str) that returns true if str contains ‘viagra’ or ‘XXX’, otherwise false.

// The function must be case-insensitive:

// checkSpam('buy ViAgRA now') == true
// checkSpam('free xxxxx') == true
// checkSpam("innocent rabbit") == false

function checkSpam(string) {
  string = string.toLowerCase()
  if (string.includes(`viagra`) || string.includes(`xxx`)) {
    return true
  } else {
    return false
  }
}

console.log(checkSpam('buy ViAgRA now')) // true
console.log(checkSpam('free xxxxx')) // true
console.log(checkSpam('innocent rabbit')) // false
