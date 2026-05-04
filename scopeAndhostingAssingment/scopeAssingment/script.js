
// 1. Global variable
var globalVar = "I am Global";
console.log(globalVar);


// 2. Access global inside function
var name = "Mohini";

function showName() {
  console.log(name);
}
showName();


// 3. Local variable using var
function localExample() {
  var localVar = "I am Local";
  console.log(localVar);
}
localExample();


// 4. Access local variable outside (Error)
/*
function test() {
  var x = 10;
}
console.log(x); 
*/


// 5. let inside block
function letExample() {
  if (true) {
    let blockVar = "Inside block";
    console.log(blockVar); 
  }
}
letExample();


// 6. Access let outside block (Error)
/*
if (true) {
  let y = 20;
}
console.log(y); 
*/


// 7. const inside block
if (true) {
  const z = 30;
  console.log(z); 
}


// 8. Access const outside block (Error)
/*
if (true) {
  const a = 50;
}
console.log(a); 
*/


// 9. Global + Local + Block variable
var globalNum = 100;

function scopeDemo() {
  var localNum = 50;

  if (true) {
    let blockNum = 25;
    console.log("Block:", blockNum); 
  }

  console.log("Local:", localNum); 
}

console.log("Global:", globalNum);
scopeDemo();


// 10. var vs let vs const
function scopeTest() {

  if (true) {
    var a = 10;      
    let b = 20;      
    const c = 30;    

    console.log("Inside block:", a, b, c);
  }

  console.log("var outside block:", a); 


}

scopeTest();