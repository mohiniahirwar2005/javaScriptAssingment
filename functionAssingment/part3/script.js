
// 1. Arrow function - Welcome message
const welcome = () => {
  console.log("Welcome to JavaScript");
};
welcome();


// 2. Arrow function with name
const greet = (name) => {
  console.log("Hello " + name);
};
greet("Mohini");


// 3. Add two numbers (return)
const add = (a, b) => {
  return a + b;
};
console.log(add(5, 3));


// 4. Multiply and print
const multiply = (a, b) => {
  console.log(a * b);
};
multiply(4, 6);


// 5. Square of a number
const square = (num) => num * num;
console.log(square(5));


// 6. Sum of three numbers
const sumThree = (a, b, c) => a + b + c;
console.log(sumThree(1, 2, 3));


// 7. Length of string
const getLength = (str) => str.length;
console.log(getLength("JavaScript"));


// 8. Check positive or negative
const checkNumber = (num) => {
  if (num >= 0) {
    console.log("Positive");
  } else {
    console.log("Negative");
  }
};
checkNumber(-5);


// 9. Difference between two numbers
const difference = (a, b) => a - b;
console.log(difference(10, 4));


// 10. Return message
const message = () => "Learning Arrow Functions";
console.log(message());


// 11. Average of three numbers
const average = (a, b, c) => (a + b + c) / 3;
console.log(average(10, 20, 30));