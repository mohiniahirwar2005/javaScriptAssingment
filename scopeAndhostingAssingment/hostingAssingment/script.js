
// 1. var before declaration
console.log(a); // undefined
var a = 10;


// 2. var before and after initialization
console.log(b); // undefined
var b = 20;
console.log(b); // 20


// 3. let before declaration (Error)
/*
console.log(c); // ❌ ReferenceError
let c = 30;
*/


// 4. const before declaration (Error)
/*
console.log(d); // ❌ ReferenceError
const d = 40;
*/


// 5. Function declaration (hoisted)
hello(); // ✅ works

function hello() {
  console.log("Hello from function declaration");
}


// 6. Function expression before assignment (Error)
/*
greet(); // ❌ Error

var greet = function () {
  console.log("Hello");
};
*/


// 7. Function expression behaves like variable
console.log(test); // undefined

var test = function () {
  console.log("Function Expression");
};


// 8. TDZ with let
/*
{
  console.log(x); // ❌ ReferenceError (TDZ)
  let x = 50;
}
*/


// 9. var vs let hoisting
console.log(v); // undefined
// console.log(l); // ❌ ReferenceError

var v = 10;
let l = 20;


// 10. Combined hoisting demo

// var
console.log(num); // undefined
var num = 5;

// let / const
/*
console.log(x1); // ❌ Error
let x1 = 10;

console.log(y1); // ❌ Error
const y1 = 20;
*/

// function declaration
demo(); // ✅ works
function demo() {
  console.log("Function hoisted");
}

// function expression
/*
demo2(); // ❌ Error
var demo2 = function () {
  console.log("Not hoisted like function declaration");
};
*/