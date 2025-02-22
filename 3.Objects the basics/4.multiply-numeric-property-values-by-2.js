// Create a function multiplyNumeric(obj) that multiplies all numeric property values of obj by 2.

// For instance:

// // before the call
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// multiplyNumeric(menu);

// // after the call
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };

// Please note that multiplyNumeric does not need to return anything. It should modify the object in-place.

// P.S. Use typeof to check for a number here.

const multiplyNumericValuesByTwo = function (object) {
  for (const key in object) {
    if (typeof object[key] === "number" && !isNaN(object[key])) {
      object[key] *= 2;
    }
  }
};

let menu = {
  width: 200,
  height: 300,
  title: "My menu",
};

multiplyNumericValuesByTwo(menu);
console.log(menu);
