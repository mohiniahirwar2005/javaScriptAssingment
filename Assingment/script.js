function handleSubmit() {
  console.log("Submit Button Clicked");

  const name = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

 
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Email:", email);
  console.log("Password:", password);



  console.log({
    name: name,
    city: city,
    email: email,
    password: password
  });

  
  document.getElementById("myName").innerText = name;
  document.getElementById("myCity").innerText = city;
  document.getElementById("myEmail").innerText = email;
  document.getElementById("myPassword").innerText = password;

  
  document.getElementById("fullName").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  
  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}