//quetion number 2
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}

//quetion number 3
for (let i = 1; i <= 10; i++) {
  if (i === 6) {
    break;
  }
  console.log(i);
}

//quetion number 4
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue;
  }
  console.log(i);
}


//quetion number 5
let skip = 4;

for (let i = 1; i <= 6; i++) {
  if (i === skip) {
    continue;
  }
  console.log(i);
}


//quetion number 6
for (let i = 1; i <= 5; i++) {
  console.log("Before break:", i);
  if (i === 3) {
    break;
  }
  console.log("After check:", i);
}


//quetion number 7
for (let i = 1; i <= 5; i++) {
  if (i === 2) {
    continue;
  }
  console.log(i);
}


//quetion number 8
function add(a, b) {
  return a + b;
}

console.log(add(5, 3));


//quetion number 9
function totalPrice(price, tax) {
  return price + tax;
}

console.log(totalPrice(100, 18));


//quetion number 10
function test() {
  console.log("Start");
  return "Done";
  console.log("This will not run"); 
}

console.log(test());


//quetion number 11
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break; 
  }
  console.log("Break loop:", i);
}

for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    continue; 
  }
  console.log("Continue loop:", i);
}


//quetion number 12
for (let i = 1; i <= 5; i++) {
  if (i === 3) {
    break;
  }
  console.log(i);
}

console.log("Loop ended");