let n = 5;

if (n > 0) {
  console.log("Posiitve Integer");
} else {
  console.log("Negative Integer");
}

let a = 20;

if (n < 20) {
  console.log("You cam vote");
} else {
  console.log("You cant vote");
}

let percentage = 90;
let grade;

if (percentage >= 90) {
  grade = "A";
} else if (percentage >= 75) {
  grade = "B";
} else if (percentage >= 50) {
  grade = "C";
} else {
  grade = "Fail";
}

console.log("Percentage", percentage);
console.log("Grade", grade);

//let username = "abcd";
//let pass = "123";

//if (username === "abcd" && pass === "123") {
// console.log("login success");
//} else {
//console.log("login failed");
//}

let username = "abcd";
let pass = "123";
username === "abcd" && pass === "123"
  ? console.log("login success")
  : console.log("login failed");

let c = 1;
b = 5;

console.log(a > 2 || b < 3);

let data;
let name = "shubham";
data = name || "N/A";
//if(name)
//{
//  data = name;
//}else{
//  data = "N/A";
//}

console.log(data);

let k = 2;
console.log(k > 10 && y < 5);

for (let i = 0; i < 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}

let choice = 1;
switch (choice) {
  case 1: {
    console.log("Tea");
    break;
  }
  case 2: {
    console.log("Coffee");
    break;
  }
  case 3: {
    console.log("Lassi");
    break;
  }
  default: {
    console.log("pani");
  }
}
