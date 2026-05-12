let arr1 = [1, 2];
arr1.push(3);
console.log("1:", arr1);


let arr2 = [10, 20, 30];
let removed1 = arr2.pop();
console.log("2 Updated:", arr2);
console.log("2 Removed:", removed1);


let arr3 = [2, 3];
arr3.unshift(1);
console.log("3:", arr3);


let arr4 = [1, 2, 3];
let removed2 = arr4.shift();
console.log("4 Updated:", arr4);
console.log("4 Removed:", removed2);


let arr5 = [1, 2, 3];
arr5.push(4, 5);
console.log("5:", arr5);


let arr6 = [3, 4, 5];
arr6.unshift(1, 2);
console.log("6:", arr6);


let names = ["Mohini", "Ravi", "Aman"];
let removedName = names.pop();
console.log("7 Updated:", names);
console.log("7 Removed:", removedName);


let colors = ["Red", "Blue", "Green"];
let removedColor = colors.shift();
console.log("9 Updated:", colors);
console.log("9 Removed:", removedColor);