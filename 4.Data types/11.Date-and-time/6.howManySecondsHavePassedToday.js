// https://javascript.info/task/get-seconds-today

// Write a function getSecondsToday() that returns the number of seconds from the beginning of today.

// For instance, if now were 10:00 am, and there was no daylight savings shift, then:

// getSecondsToday() == 36000 // (3600 * 10)

// The function should work in any day. That is, it should not have a hard-coded value of “today”.

function getSecondsToday(dateTimeObj) {
  const dateAtMidnight = new Date(
    dateTimeObj.getFullYear(),
    dateTimeObj.getMonth(),
    dateTimeObj.getDate()
  ).getTime()
  return Math.floor((dateTimeObj.getTime() - dateAtMidnight) / 1000)
}

const testDate = new Date()

console.log(getSecondsToday(testDate))
