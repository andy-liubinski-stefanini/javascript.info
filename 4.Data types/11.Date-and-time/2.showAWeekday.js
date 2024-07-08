// https://javascript.info/task/get-week-day

// Write a function getWeekDay(date) to show the weekday in short format: 'MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU'.

// For instance:

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getWeekDay(date) );        // should output "TU"

function getWeekDay(date) {
  const weekdayNamesUSAStyle = ['SU', 'MO', 'TU', 'WE', 'TH', 'FR', 'SA']

  return weekdayNamesUSAStyle[date.getDay()]
}

console.log(getWeekDay(new Date()))
