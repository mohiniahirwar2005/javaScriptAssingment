let users1 = [];

users1.push({ id: 1, name: "Amit" });
users1.push({ id: 2, name: "Rahul" });

console.log(users1);




let users2 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rohit" }
];

console.log(users2);




console.log(users2[0]);




let user = users2.find((item) => item.id === 2);

console.log(user);




let users3 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Ravi" }
];

let updateUser = users3.find((item) => item.id === 2);

updateUser.name = "Rahul";

console.log(users3);




let users4 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rohit" }
];

let changeName = users4.find((item) => item.name === "Amit");

changeName.name = "Rahul";

console.log(users4);


let users5 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" }
];

let newUsers = users5.filter((item) => item.id !== 1);

console.log(newUsers);




let users6 = [
    { id: 1, name: "Amit" },
    { id: 2, name: "Rahul" },
    { id: 3, name: "Rohit" }
];

let deleteUser = users6.filter((item) => item.id !== 2);

console.log(deleteUser);



let users7 = [];

users7.push({ id: 1, name: "Amit" });
users7.push({ id: 2, name: "Rahul" });

console.log(users7);




let users8 = [];

users8.push({ id: 1, name: "Amit" });
users8.push({ id: 2, name: "Rohit" });

let editUser = users8.find((item) => item.id === 2);

editUser.name = "Rahul";

console.log(users8);




let users9 = [];

users9.push({ id: 1, name: "Amit" });
users9.push({ id: 2, name: "Rahul" });
users9.push({ id: 3, name: "Rohit" });

let remainingUsers = users9.filter((item) => item.id !== 2);

console.log(remainingUsers);




let users = [];


users.push({ id: 1, name: "Amit" });
users.push({ id: 2, name: "Rahul" });


console.log("All Users:", users);


let userUpdate = users.find((item) => item.id === 1);

userUpdate.name = "Rohit";

console.log("After Update:", users);


users = users.filter((item) => item.id !== 2);

console.log("After Delete:", users);