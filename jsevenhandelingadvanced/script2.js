document.querySelector("form").addEventListener("submit", (event)=>{
event.preventDefault();
console.log("form submitted");

const fn = document.getElementById("fullname").value;
const em = document.getElementById("email").value;
const ps = document.getElementById("passward").value;



const dataPacket = {
    FullName:fn,
    Email:em,
    Passward:ps,
};

console.log(dataPacket);

document.getElementById("FullName").value = " ";
document.getElementById("Email").value = " ";
document.getElementById("Passward").value = " ";


});

document.querySelector("form").addEventListener("reset", (event)=>{
event.preventDefault();



confirm("are your sure")&& window.location.reload();

});



document.addEventListener("keydown",(event) => {
let keyPress = event.key;
keyPress === "Escape" && window.location.reload();


});



