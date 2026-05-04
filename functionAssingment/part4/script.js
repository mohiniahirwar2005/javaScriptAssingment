
// 1. Anonymous function assigned to variable
let func = function () {
  console.log("Anonymous Function");
};
func();


// 2. Print "Hello"
let sayHello = function () {
  console.log("Hello");
};
sayHello();


// 3. Add two numbers and return
let add = function (a, b) {
  return a + b;
};
console.log(add(4, 6));


// 4. Call and print output
let multiply = function (a, b) {
  return a * b;
};
console.log(multiply(3, 5));


// 5. Anonymous function inside setTimeout
setTimeout(function () {
  console.log("Executed after delay");
}, 1000);


// 6. Print message after 2 seconds
setTimeout(function () {
  console.log("This message is after 2 seconds");
}, 2000);


// 7. IIFE (Immediately Invoked Function Expression)
(function () {
  console.log("IIFE executed");
})();


// 8. IIFE printing message instantly
(function () {
  console.log("Hello from IIFE");
})();


// 9. Store and call multiple times
let greet = function (name) {
  console.log("Hello " + name);
};

greet("Aman");
greet("Riya");
greet("Sohan");


// 10. Anonymous function as callback
function process(callback) {
  callback();
}

process(function () {
  console.log("Callback executed");
});


// 11. Anonymous function with parameters and return
let square = function (num) {
  return num * num;
};
console.log(square(5));


// 12. Combined demonstration

// Anonymous function in variable
let msg = function () {
  console.log("Stored in variable");
};
msg();

// Anonymous function in callback
setTimeout(function () {
  console.log("Callback function");
}, 500);

// Anonymous function as IIFE
(function () {
  console.log("IIFE again");
})();