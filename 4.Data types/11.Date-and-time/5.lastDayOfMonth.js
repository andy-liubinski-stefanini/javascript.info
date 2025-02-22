// https://javascript.info/task/last-day-of-month

// Write a function getLastDayOfMonth(year, month) that returns the last day of month. Sometimes it is 30th, 31st or even 28/29th for Feb.

// Parameters:

//     year – four-digits year, for instance 2012.
//     month – month, from 0 to 11.

// For instance, getLastDayOfMonth(2012, 1) = 29 (leap year, Feb).

function getLastDayOfMonth(year, month) {
  const nextMonthFirstDay = new Date(Date.UTC(year, month + 1, 1, -12))

  return nextMonthFirstDay.getDate()
}

console.log(getLastDayOfMonth(2012, 1))
