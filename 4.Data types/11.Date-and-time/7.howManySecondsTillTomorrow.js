// https://javascript.info/task/get-seconds-to-tomorrow

// Create a function getSecondsToTomorrow() that returns the number of seconds till tomorrow.

// For instance, if now is 23:00, then:

// getSecondsToTomorrow() == 3600

// P.S. The function should work at any day, the “today” is not hardcoded.

function getSecondsToTomorrow(dateTimeObj) {
  const dateAtNextMidnight = new Date(
    dateTimeObj.getFullYear(),
    dateTimeObj.getMonth(),
    dateTimeObj.getDate() + 1
  ).getTime()

  return Math.floor((dateAtNextMidnight - dateTimeObj.getTime()) / 1000)
}

const testDate = new Date()

console.log(getSecondsToTomorrow(testDate))
