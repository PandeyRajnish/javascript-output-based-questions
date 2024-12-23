// Functions in JavaScript
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

//? Q4- What is IIFE - Immediately Invoked Function Expression
(function square(num) {
  console.log(num * num); //* O/P - 5
})(5);

//? Q5 - IIFE - O/P Based Question?
(function (x) {
  return (function (y) {
    console.log(x); //* O/P - 1 (because of closure)
  })(2);
})(1);
