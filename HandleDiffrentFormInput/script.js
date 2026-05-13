function handleForm() {
    let name = document.getElementById("name").value;
    let agree = document.getElementById("agree").checked;
    let gender = document.querySelector('input[name="gender"]:checked')?.value;
    let city = document.getElementById("city").value;

    console.log("Name:", name);
    console.log("Agree:", agree);
    console.log("Gender:", gender);
    console.log("City:", city);
}


function handleInput(event) {
    let element = event.target;

    if (element.type === "checkbox") {
        console.log(element.checked);
    } else if (element.type === "radio") {
        console.log(element.value);
    } else {
        console.log(element.value);
    }
}