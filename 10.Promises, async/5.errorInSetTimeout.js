// https://javascript.info/task/error-async

// What do you think? Will the .catch trigger? Explain your answer.

// new Promise(function(resolve, reject) {
//   setTimeout(() => {
//     throw new Error("Whoops!");
//   }, 1000);
// }).catch(alert);

// ERROR IS TRIGGERED AFTER THE RESOLVING FUNCTION FINISHED EXECUTING. ERROR WILL NOT BE HANDLED

// CORRECT WAY :

new Promise(function (resolve, reject) {
  setTimeout(() => {
    reject(new Error('Whoops!'));
  }, 1000);
}).catch(console.error);
