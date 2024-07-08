// https://javascript.info/task/weekday

// European countries have days of week starting with Monday (number 1), then Tuesday (number 2) and till Sunday (number 7). Write a function getLocalDay(date) that returns the “European” day of week for date.

// let date = new Date(2012, 0, 3);  // 3 Jan 2012
// alert( getLocalDay(date) );       // tuesday, should show 2

function getWeekDay(date) {
  const weekdayNamesEurStyle = ['MO', 'TU', 'WE', 'TH', 'FR', 'SA', 'SU']

  const dayNum = date.getDay() - 1
  if (dayNum === -1) {
    dayNum = weekdayNamesEurStyle.length - 1
  }
  return weekdayNamesEurStyle[dayNum]
}

console.log(getWeekDay(new Date()))
