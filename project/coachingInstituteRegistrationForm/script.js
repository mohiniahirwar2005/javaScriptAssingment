// SubmitButton
document
  .getElementById("registrationFrom")
  .addEventListener("submit", (event) => {
    event.preventDefault();

    
    const fn = document.getElementById("fullName").value;

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
      .querySelectorAll("input[name='timings']:checked")
      .forEach((item) => {
        timings.push(item.value);
      });

    
    const fullNameError =
      document.getElementById("fullNameError");

    const emailError =
      document.getElementById("emailError");

    const phoneError =
      document.getElementById("phoneError");

    const dobError =
      document.getElementById("dobError");

    const qualificationError =
      document.getElementById(
        "qualificationError"
      );

    const marksError =
      document.getElementById("marksError");

    const courseError =
      document.getElementById("courseError");

    const timingsError =
      document.getElementById("timingsError");

    const addressError =
      document.getElementById("addressError");

    const cityError =
      document.getElementById("cityError");

    const pinError =
      document.getElementById("pinError");

    const guardianNameError =
      document.getElementById(
        "guardianNameError"
      );

    const guardianPhoneError =
      document.getElementById(
        "guardianPhoneError"
      );

    const referenceError =
      document.getElementById(
        "referenceError"
      );

    
    fullNameError.innerText = "";
    emailError.innerText = "";
    phoneError.innerText = "";
    dobError.innerText = "";
    qualificationError.innerText = "";
    marksError.innerText = "";
    courseError.innerText = "";
    timingsError.innerText = "";
    addressError.innerText = "";
    cityError.innerText = "";
    pinError.innerText = "";
    guardianNameError.innerText = "";
    guardianPhoneError.innerText = "";
    referenceError.innerText = "";

    let isValid = true;

    
    const namePattern = /^[A-Za-z\s]+$/;

    if (fn === "") {
      fullNameError.innerText =
        "Full Name is required";

      isValid = false;
    } else if (!namePattern.test(fn)) {
      fullNameError.innerText =
        "Please enter a valid name";

      isValid = false;
    }

    
    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email === "") {
      emailError.innerText =
        "Email is required";

      isValid = false;
    } else if (!emailPattern.test(email)) {
      emailError.innerText =
        "Please enter a valid email address";

      isValid = false;
    }

    
    const phonePattern = /^[6-9]\d{9}$/;

    if (phone === "") {
      phoneError.innerText =
        "Mobile Number is required";

      isValid = false;
    } else if (!phonePattern.test(phone)) {
      phoneError.innerText =
        "Enter a valid 10-digit Indian mobile number";

      isValid = false;
    }

    
    if (dob === "") {
      dobError.innerText =
        "Date of Birth is required";

      isValid = false;
    } else {
      const birthDate = new Date(dob);

      const today = new Date();

      let age =
        today.getFullYear() -
        birthDate.getFullYear();

      const monthDiff =
        today.getMonth() -
        birthDate.getMonth();

      if (
        monthDiff < 0 ||
        (monthDiff === 0 &&
          today.getDate() <
            birthDate.getDate())
      ) {
        age--;
      }

      if (age < 15) {
        dobError.innerText =
          "You must be at least 15 years old";

        isValid = false;
      }
    }

    
    if (qualification === "") {
      qualificationError.innerText =
        "Please select a qualification";

      isValid = false;
    }

    
    const percentagePattern =
      /^(100|[0-9]{1,2})$/;

    const gradePattern = /^[A-Fa-f]$/;

    if (marks === "") {
      marksError.innerText =
        "Percentage/Grade is required";

      isValid = false;
    } else if (
      !percentagePattern.test(marks) &&
      !gradePattern.test(marks)
    ) {
      marksError.innerText =
        "Enter a valid percentage or grade";

      isValid = false;
    }

    
    if (course === "") {
      courseError.innerText =
        "Please select a course";

      isValid = false;
    }

    
    if (timings.length === 0) {
      timingsError.innerText =
        "Please select batch timing";

      isValid = false;
    }

    
    if (address === "") {
      addressError.innerText =
        "Please enter your full address";

      isValid = false;
    }

    if (city === "") {
      cityError.innerText =
        "City is required";

      isValid = false;
    } else if (!namePattern.test(city)) {
      cityError.innerText =
        "Please enter a valid city name";

      isValid = false;
    }

    
    const pinPattern = /^\d{6}$/;

    if (pin === "") {
      pinError.innerText =
        "Pin Code is required";

      isValid = false;
    } else if (!pinPattern.test(pin)) {
      pinError.innerText =
        "Enter a valid 6-digit pin code";

      isValid = false;
    }

    
    if (guardianName === "") {
      guardianNameError.innerText =
        "Guardian Name is required";

      isValid = false;
    } else if (!namePattern.test(guardianName)) {
      guardianNameError.innerText =
        "Enter guardian's full name";

      isValid = false;
    }

    
    if (guardianPhone === "") {
      guardianPhoneError.innerText =
        "Guardian contact is required";

      isValid = false;
    } else if (!phonePattern.test(guardianPhone)) {
      guardianPhoneError.innerText =
        "Enter a valid 10-digit contact number";

      isValid = false;
    }

    if (reference === "") {
      referenceError.innerText =
        "Please select an option";

      isValid = false;
    }

   
    if (isValid) {
      alert(
        "Registration Form Submitted Successfully"
      );

      console.log({
        fullName: fn,
        email,
        phone,
        dob,
        gender: gndr,
        qualification,
        marks,
        course,
        timings,
        address,
        city,
        pin,
        guardianName,
        guardianPhone,
        reference,
        specialRequirement,
      });

      document
        .getElementById("registrationFrom")
        .reset();
    }
  });


document
  .getElementById("registrationFrom")
  .addEventListener("reset", (event) => {
    event.preventDefault();

    window.location.reload();
  });