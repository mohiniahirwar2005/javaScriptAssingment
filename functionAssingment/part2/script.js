
// 1. Function expression stored in variable
let hello = function () {
  console.log("Hello World");
};
hello();


// 2. Execute using variable name
let greet = function () {
  console.log("Welcome!");
};
greet();


// 3. Function expression with one parameter
let display = function (value) {
  console.log(value);
};
display("JavaScript");


// 4. Store and print a message
let message = function () {
  console.log("This is a function expression");
};
message();


// 5. Two parameters
let showValues = function (a, b) {
  console.log("Value 1:", a, "Value 2:", b);
};
showValues(10, 20);


// 6. Two different function expressions
let func1 = function () {
  console.log("Function 1");
};

let func2 = function () {
  console.log("Function 2");
};

func1();
func2();


// 7. Assign to another variable
let original = function () {
  console.log("Original Function");
};

let copy = original;

original();
copy();


// 8. Return value and print
let add = function (a, b) {
  return a + b;
};

console.log(add(5, 7));


// 9. Call multiple times
let square = function (num) {
  console.log(num * num);
};

square(2);
square(3);
square(4);


// 10. Calling before declaration (will give error)
/*
test(); // ❌ Error: Cannot access before initialization

let test = function () {
  console.log("Test function");
};
*/


// 11. Average of three numbers
let average = function (a, b, c) {
  return (a + b + c) / 3;
};

console.log(average(10, 20, 30));