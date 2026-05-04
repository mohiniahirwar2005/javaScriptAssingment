// 1. Hello World
function helloWorld() {
  console.log("Hello World");
}
helloWorld();


// 2. Display name
function showName() {
  console.log("Mohini");
}
showName();


// 3. Welcome message
function welcome() {
  console.log("Welcome to College");
}
welcome();


// 4. Function with parameter
function greet(name) {
  console.log("Hello " + name);
}
greet("Rahul");


// 5. Print sum
function sum(a, b) {
  console.log(a + b);
}
sum(5, 3);


// 6. Print square
function square(num) {
  console.log(num * num);
}
square(4);


// 7. Return addition
function add(a, b) {
  return a + b;
}
console.log(add(2, 3));


// 8. Return multiplication
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5));


// 9. Name and age
function info(name, age) {
  console.log("My name is " + name + " and I am " + age + " years old");
}
info("Mohini", 20);


// 10. Average of three numbers
function average(a, b, c) {
  return (a + b + c) / 3;
}
console.log(average(10, 20, 30));


// 11. Call function multiple times
function greetMultiple(name) {
  console.log("Hello " + name);
}
greetMultiple("Aman");
greetMultiple("Riya");
greetMultiple("Sohan");


// 12. Greater number
function greater(a, b) {
  if (a > b) {
    return a;
  } else {
    return b;
  }
}
console.log(greater(10, 20));