function handleSubmit() {
  console.log("Submit Button Clicked ✅");

  const name = document.getElementById("fullName").value;
  const city = document.getElementById("city").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;

  // 🔥 Console me sab data show hoga
  console.log("Name:", name);
  console.log("City:", city);
  console.log("Email:", email);
  console.log("Password:", password);

  // Ek sath object me bhi dekh sakte ho (best way)
  console.log({
    name: name,
    city: city,
    email: email,
    password: password
  });

  // UI me show
  document.getElementById("myName").innerText = name;
  document.getElementById("myCity").innerText = city;
  document.getElementById("myEmail").innerText = email;
  document.getElementById("myPassword").innerText = password;

  // Clear fields
  document.getElementById("fullName").value = "";
  document.getElementById("city").value = "";
  document.getElementById("email").value = "";
  document.getElementById("password").value = "";

  // Show card
  document.getElementById("dataCard").classList.add("divShow");
  document.getElementById("dataCard").classList.remove("divHide");
}