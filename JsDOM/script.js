function submit() {
     console.log("Sumit Button Clicked"); 
     const fn = document.getElementById("fullName").value; 
     console.log(fn); document.getElementById("myData").innerText = fn; 
     document.getElementById("myData2").innerText = fn; 
     document.getElementById("fullName").value = ""; 
     document.getElementById("dataCard").classList.add("divShow") 
     document.getElementById("dataCard").classList.remove("divHide") 

}