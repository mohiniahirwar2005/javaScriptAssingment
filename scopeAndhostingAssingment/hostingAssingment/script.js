
// 1. var before declaration
console.log(a); 
var a = 10;


// 2. var before and after initialization
console.log(b); 
var b = 20;
console.log(b); 


// 3. let before declaration (Error)
/*
console.log(c); 
let c = 30;
*/


// 4. const before declaration (Error)
/*
console.log(d); 
const d = 40;
*/


// 5. Function declaration (hoisted)
hello(); 

function hello() {
  console.log("Hello from function declaration");
}


// 6. Function expression before assignment (Error)
/*
greet(); 

var greet = function () {
  console.log("Hello");
};
*/


// 7. Function expression behaves like variable
console.log(test); 

var test = function () {
  console.log("Function Expression");
};


// 8. TDZ with let
/*
{
  console.log(x); 
  let x = 50;
}
*/


// 9. var vs let hoisting
console.log(v); 
// console.log(l);

var v = 10;
let l = 20;


// 10. Combined hoisting demo

// var
console.log(num); 
var num = 5;

// let / const
/*
console.log(x1); 
let x1 = 10;

console.log(y1); 
const y1 = 20;
*/

// function declaration
demo(); 
function demo() {
  console.log("Function hoisted");
}

// function expression
/*
demo2(); 
var demo2 = function () {
  console.log("Not hoisted like function declaration");
};
*/