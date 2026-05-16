// Submit Button
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    const fn =
      document.getElementById("fullName").value;

    const email =
      document.getElementById("email").value;

    const phone =
      document.getElementById("phone").value;

    const dob =
      document.getElementById("dob").value;

    const qualification =
      document.getElementById("qualification").value;

    const marks =
      document.getElementById("marks").value;

    const course =
      document.getElementById("course").value;

    const address =
      document.getElementById("address").value;

    const city =
      document.getElementById("city").value;

    const pin =
      document.getElementById("pin").value;

    const guardianName =
      document.getElementById("guardianName").value;

    const guardianPhone =
      document.getElementById("guardianPhone").value;

    const reference =
      document.getElementById("reference").value;

    const specialRequirement =
      document.getElementById("specialRequirement").value;

    const gndr = document.querySelector(
      "input[name='gender']:checked"
    )?.value;

    const timings = [];

    document
      .querySelectorAll(
        "input[name='timings']:checked"
      )
      .forEach((item) => {
        timings.push(item.value);
      });

    let isValid = true;

    
    if (fn === "") {
      isValid = false;
      console.log("Full Name is required");
    }

    
    if (isValid) {
      console.log(
        "===== Registration Form Data ====="
      );

      console.log("Full Name:", fn);
      console.log("Email:", email);
      console.log("Phone:", phone);
      console.log("DOB:", dob);
      console.log("Gender:", gndr);
      console.log(
        "Qualification:",
        qualification
      );
      console.log("Marks:", marks);
      console.log("Course:", course);
      console.log("Timings:", timings);
      console.log("Address:", address);
      console.log("City:", city);
      console.log("Pin Code:", pin);
      console.log(
        "Guardian Name:",
        guardianName
      );
      console.log(
        "Guardian Phone:",
        guardianPhone
      );
      console.log("Reference:", reference);
      console.log(
        "Special Requirement:",
        specialRequirement
      );

      alert(
        "Registration Form Submitted Successfully"
      );

      document
        .getElementById("registrationFrom")
        .reset();
    }
  });

// Reset Button
document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    console.clear();

    console.log("Form Reset Successfully");

    window.location.reload();
  });