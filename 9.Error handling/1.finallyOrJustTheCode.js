// https://javascript.info/task/finally-or-code-after

// Compare the two code fragments.

//     The first one uses finally to execute the code after try...catch:

// try {
//   work work
// } catch (err) {
//   handle errors
// } finally {
//   cleanup the working space
// }

// The second fragment puts the cleaning right after try...catch:

//     try {
//       work work
//     } catch (err) {
//       handle errors
//     }

//     cleanup the working space

// We definitely need the cleanup after the work, doesn’t matter if there was an error or not.

// Is there an advantage here in using finally or both code fragments are equal? If there is such an advantage, then give an example when it matters.

//
//

//Finally runs even if there was a return from the try-catch block that is inside a function. This makes it useful if "cleanup the working space" MUST run
