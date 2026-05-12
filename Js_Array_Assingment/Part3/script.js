let arr1 = [10, 20, 30, 40];
let index1 = arr1.indexOf(30);
console.log("1. Index of 30:", index1);


let arr2 = [5, 10, 15];
console.log("2. Includes 10:", arr2.includes(10));


let arr3 = [1, 2, 3];
let index3 = arr3.indexOf(5);
console.log("3. Index of 5:", index3);


let arr4 = ["Red", "Blue", "Green"];
console.log("4. Includes Blue:", arr4.includes("Blue"));
console.log("Includes Yellow:", arr4.includes("Yellow"));


let users = [
  { id: 1, name: "Mohini" },
  { id: 2, name: "Riya" },
  { id: 3, name: "Aman" }
];

let user = users.find(u => u.id === 2);
console.log("5.", user);


let numbers1 = [5, 12, 8, 20];
let found = numbers1.find(num => num > 10);
console.log("6. First number greater than 10:", found);


let numbers2 = [10, 25, 30, 5, 40];
let filtered1 = numbers2.filter(num => num > 20);
console.log("7.", filtered1);


let numbers3 = [1, 2, 3, 4, 5, 6];
let evenNumbers = numbers3.filter(num => num % 2 === 0);
console.log("8. Even Numbers:", evenNumbers);


let numbers4 = [40, 10, 5, 25];
numbers4.sort();
console.log("9. Default Sort:", numbers4);


let numbers5 = [40, 10, 5, 25];
numbers5.sort((a, b) => a - b);
console.log("10. Ascending:", numbers5);


let numbers6 = [40, 10, 5, 25];
numbers6.sort((a, b) => b - a);
console.log("11. Descending:", numbers6);


let numbers7 = [15, 5, 25, 10, 30, 20];

console.log("12. Includes 25:", numbers7.includes(25));

console.log("Index of 10:", numbers7.indexOf(10));

let filtered2 = numbers7.filter(num => num > 10);
console.log("Filtered Values (>10):", filtered2);

filtered2.sort((a, b) => a - b);
console.log("Sorted Final Array:", filtered2);