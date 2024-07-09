// https://javascript.info/task/then-vs-catch

// Are these code fragments equal? In other words, do they behave the same way in any circumstances, for any handler functions?

// promise.then(f1).catch(f2);

// Versus:

// promise.then(f1, f2);

// ERRORS ARE ONLY HANDLED BY CATCH. IF F1 HAS AN ERROR - IT WILL REMAIN UNHANDLED IN THE SECOND SITUATION
