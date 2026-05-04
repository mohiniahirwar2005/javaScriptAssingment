
// 1. Enable strict mode and use var
"use strict";
var a = 10;
console.log(a);


// 2. Using variable without declaration (Error)
/*
"use strict";
b = 20; 
console.log(b);
*/


// 3. Strict mode inside function
function testStrict() {
  "use strict";
  // c = 30; 
  var c = 30;
  console.log(c);
}
testStrict();


// 4. this in strict mode
function checkThis() {
  "use strict";
  console.log(this); 
}
checkThis();


// 5. Delete variable (Error)
/*
"use strict";
var x = 50;
delete x; 
*/


// 6. Duplicate parameters (Error)
/*
"use strict";
function sum(a, a) { 
  return a + a;
}
*/


// 7. Octal number (Error)
/*
"use strict";
let num = 012; 
*/


// 8. Reserved keyword as variable (Error)
/*
"use strict";
let eval = 10;
*/


// 9. Compare strict vs non-strict


function normalMode() {
  x1 = 100; // allowed (not recommended)
  console.log("Normal:", x1);
}
normalMode();


function strictMode() {
  "use strict";
  
  var x2 = 200;
  console.log("Strict:", x2);
}
strictMode();


// 10. Combined strict mode demo

function strictDemo() {
  "use strict";

 
  console.log("this value:", this); // undefined


}

strictDemo();