//! ------------- Functions in JavaScript ------------------------
// //? Q2 - What is function declarations or definitions or statement?
// function square(num) {
//   return num * num;
// }

// //? Q2 - What is function expression?
// const square = function (num) {
//   return num * num;
// };

// console.log(square(5));

// //? What are first class functions?
// //* functions can be treated like a normal variable in these cases functions can be passed to another functions, can be used, manipulated and returned from the function basically everything that a variable can do function  can also do.
// function displaySquare(fn) {
//   console.log("Square is " + fn(5));
// }

// displaySquare(square);

// //? Q4- What is IIFE - Immediately Invoked Function Expression
// (function square(num) {
//   console.log(num * num); //* O/P - 5
// })(5);

// //? Q5 - IIFE - O/P Based Question?
// (function (x) {
//   return (function (y) {
//     console.log(x); //* O/P - 1 (because of closure)
//   })(2);
// })(1);

// //? Q7 - Function Scope - O/P Based Question
// for (let i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); //* O/P - 0 1 2 3 4 (because of let & const are blocked scope)
//   }, i * 1000);
// }

// for (var i = 0; i < 5; i++) {
//   setTimeout(function () {
//     console.log(i); //* O/P - 5 five times (var doesn't have blocked scope)
//   }, i * 1000);
// }

//! -------------------- Hoisting --------------------
// functionName(); //* O/P - Functions are hoisted (hoisting works little differently in case of functions here complete function copied to scope)

// function functionName() {
//   console.log("Functions are hoisted");
// }
// console.log(x); //* O/P - undefined (because of hoisting)

// var x = 5;

//? Q9 - Function Hoisting - O/P Based Question
var x = 21;

var fun = function () {
  console.log(x);
  var x = 20;
};

fun();
