/*
let fd = [
    ["RajVardhan", "18-11-1997", 7340862969, "Bhopal", "Theacher"],
    ["RajVardhan", "18-11-1997", 7340862969, "Bhopal", "Theacher"],
    ["RajVardhan", "18-11-1997", 7340862969, "Bhopal", "Theacher"],
    ["RajVardhan", "18-11-1997", 7340862969, "Bhopal", "Theacher"],
];

fd.forEach((element) => {
    console.log(element[2]);
    
});

let FormData = [
  {
    "name": "Amit Sharma",
    "dob": "1995-03-12",
    "phone": "+91-9876543210",
    "address": "Bhopal, Madhya Pradesh, India",
    "profession": "Software Developer"
  },
  {
    "name": "Neha Verma",
    "dob": "1998-07-25",
    "phone": "+91-9123456780",
    "address": "Indore, Madhya Pradesh, India",
    "profession": "Graphic Designer"
  },
  {
    "name": "Rahul Singh",
    "dob": "1992-11-05",
    "phone": "+91-9988776655",
    "address": "Delhi, India",
    "profession": "Mechanical Engineer"
  },
  {
    "name": "Pooja Patel",
    "dob": "2000-01-18",
    "phone": "+91-9090909090",
    "address": "Ahmedabad, Gujarat, India",
    "profession": "Teacher"
  },
  {
    "name": "Vikas Yadav",
    "dob": "1996-09-30",
    "phone": "+91-9345678901",
    "address": "Lucknow, Uttar Pradesh, India",
    "profession": "Bank Manager"
  },
  {
    "name": "Sneha Gupta",
    "dob": "1994-06-14",
    "phone": "+91-9871234567",
    "address": "Jaipur, Rajasthan, India",
    "profession": "Doctor"
  },
  {
    "name": "Arjun Mehta",
    "dob": "1999-12-22",
    "phone": "+91-9012345678",
    "address": "Mumbai, Maharashtra, India",
    "profession": "Marketing Executive"
  }
];

FormData.forEach((item) => {
    console.log(item);
    
})


console.log(FormData);
console.log(FormData[0]["name"]); 
console.log(FormData[1].phone );
*/


/*

let h = {
  name: "Arjun Mehta",
  dob: "1999-12-22",
  phone: "+91-9012345678",
  address: "Mumbai, Maharashtra, India",
  profession: "Marketing Executive",
};

console.log(Object.keys(h));
console.log(Object.values(h));

console.log(Object.entries(h));



let ar = [22, 43, 6, 74, 8, 91, 5, 23, 32, 6, 9, 4, 92]
ar.sort((a,b)=> a - b);

console.log(ar);

console.log(ar.find((val) => val > 20));
console.log(ar.find((val) => val === 20));
console.log(ar.findIndex((val) => val === 20));
console.log(ar.findLastIndex((val) => val ===  20));






let FormData = [
  {
    "name": "Amit Sharma",
    "dob": "1995-03-12",
    "phone": "+91-9876543210",
    "address": "Bhopal, Madhya Pradesh, India",
    "profession": "Software Developer"
  },
  {
    "name": "Neha Verma",
    "dob": "1998-07-25",
    "phone": "+91-9123456780",
    "address": "Indore, Madhya Pradesh, India",
    "profession": "Graphic Designer"
  },
  {
    "name": "Rahul Singh",
    "dob": "1992-11-05",
    "phone": "+91-9988776655",
    "address": "Delhi, India",
    "profession": "Mechanical Engineer"
  },
  {
    "name": "Pooja Patel",
    "dob": "2000-01-18",
    "phone": "+91-9090909090",
    "address": "Ahmedabad, Gujarat, India",
    "profession": "Teacher"
  },
  {
    "name": "Vikas Yadav",
    "dob": "1996-09-30",
    "phone": "+91-9345678901",
    "address": "Lucknow, Uttar Pradesh, India",
    "profession": "Bank Manager"
  },
  {
    "name": "Sneha Gupta",
    "dob": "1994-06-14",
    "phone": "+91-9871234567",
    "address": "Jaipur, Rajasthan, India",
    "profession": "Doctor"
  },
  {
    "name": "Arjun Mehta",
    "dob": "1999-12-22",
    "phone": "+91-9012345678",
    "address": "Mumbai, Maharashtra, India",
    "profession": "Marketing Executive"
  }
];

FormData.forEach((item) => {
    console.log(item);
    
})

FormData.map((element, idx) => {
    console.log(idx);
    
    console.log(element.phone);
})
*/
 
let ar2 = [43, 6, 74, 8, 91, 5, 23, 4, 87, 32, 6, 9, 4, 92]
console.log(ar2.filter((val) => val > 20));
console.log(ar2.find((val) => val > 20));


console.log(ar2.slice(0,7));

let ab = "This is Web-Development Class"
console.log(ab);

console.log(ab.split(" "));
console.log(ab.split("-"));




