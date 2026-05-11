function calculateTip(){

  let billAmount = Number(document.getElementById("billAmount").value);

  let service = Number(document.getElementById("service").value);

  let people = Number(document.getElementById("people").value);

 
  if(billAmount <= 0 || people <= 0){
    alert("Please enter valid details");
    return;
  }

 
  let tip = billAmount * service;

 
  let totalBill = billAmount + tip;

 
  let perPerson = totalBill / people;

 
  document.getElementById("resultBox").style.display = "block";

  
  document.getElementById("finalAmount").innerHTML =
    "₹" + perPerson.toFixed(2);
}