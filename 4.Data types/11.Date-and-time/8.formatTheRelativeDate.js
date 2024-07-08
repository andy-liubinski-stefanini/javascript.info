// // https://javascript.info/task/format-date-relative

// Write a function formatDate(date) that should format date as follows:

//     If since date passed less than 1 second, then "right now".
//     Otherwise, if since date passed less than 1 minute, then "n sec. ago".
//     Otherwise, if less than an hour, then "m min. ago".
//     Otherwise, the full date in the format "DD.MM.YY HH:mm". That is: "day.month.year hours:minutes", all in 2-digit format, e.g. 31.12.16 10:00.

// For instance:

// alert( formatDate(new Date(new Date - 1)) ); // "right now"

// alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 sec. ago"

// alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 min. ago"

// // yesterday's date like 31.12.16 20:00
// alert( formatDate(new Date(new Date - 86400 * 1000)) );

function formatDate(timeObj) {
  const timeDiff = Math.floor(
    new Date().getTime() - new Date(timeObj).getTime() / 1000
  )

  let formatString = ''
  if (timeDiff < 1) formatString = 'right now'
  if (timeDiff > 1 && timeDiff < 60) formatString = `${timeDiff} sec. ago`
  if (timeDiff > 60 && timeDiff < 60 * 60)
    formatString = `${Math.floor(timeDiff / 60)} min. ago`
  if (timeDiff > 60 * 60) {
    formatString = `${timeObj.getDate()}.${timeObj.getMonth()}.${timeObj
      .getFullYear()
      .toString()
      .substring(2)} ${timeObj.getHours()}:${timeObj.getMinutes()}`
  }
  return formatString
}

console.log(formatDate(new Date(new Date() - 1))) // "right now"
