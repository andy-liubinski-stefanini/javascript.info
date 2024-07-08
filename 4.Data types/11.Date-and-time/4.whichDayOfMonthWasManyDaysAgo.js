// https://javascript.info/task/get-date-ago

// Create a function getDateAgo(date, days) to return the day of month days ago from the date.

// For instance, if today is 20th, then getDateAgo(new Date(), 1) should be 19th and getDateAgo(new Date(), 2) should be 18th.

// Should work reliably for days=365 or more:

// let date = new Date(2015, 0, 2);

// alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
// alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
// alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

// P.S. The function should not modify the given date.

function getDateAgo(date, days) {
  const copiedDate = new Date(date)
  copiedDate.setDate(copiedDate.getDate() - days)

  return copiedDate.getDate()
}

const newDate = new Date(2015, 0, 15)

console.log(getDateAgo(newDate, 20))

// SPENT TOO MUCH TIME IN THIS. 😒
