// Assumed Rules
// HRA = 20% of Basic Salary
// DA = 80% of Basic Salary

function formatCurrency(amount){

    return amount.toLocaleString("en-IN", {
        style: "currency",
        currency: "INR",
        minimumFractionDigits: 2
    });
}

// Standalone Function
function calculateGrossSalary(basic){

    let hra = basic * 0.20;

    let da = basic * 0.80;

    let gross = basic + hra + da;

    return {
        basic,
        hra,
        da,
        gross
    };
}

function handleCalculation(){

    let input = document.getElementById("basicSalary");

    let errorMsg = document.getElementById("errorMsg");

    let resultCard = document.getElementById("resultCard");

    let successMsg = document.getElementById("successMsg");

    let calculateBtn = document.getElementById("calculateBtn");

    let basic = parseFloat(input.value);

    // Validation
    if(input.value === "" || isNaN(basic) || basic < 0){

        errorMsg.innerHTML =
        "Please enter a valid non-negative number.";

        resultCard.classList.add("d-none");

        successMsg.classList.add("d-none");

        return;
    }

    errorMsg.innerHTML = "";

    // Disable Button + Spinner
    calculateBtn.disabled = true;

    calculateBtn.innerHTML = `
        <span
          class="spinner-border spinner-border-sm"
        ></span>
        Calculating...
    `;

    // Simulate Processing
    setTimeout(() => {

        let salary = calculateGrossSalary(basic);

        // Show Results
        resultCard.classList.remove("d-none");

        successMsg.classList.remove("d-none");

        document.getElementById("basicResult").innerHTML =
        formatCurrency(salary.basic);

        document.getElementById("hraResult").innerHTML =
        formatCurrency(salary.hra);

        document.getElementById("daResult").innerHTML =
        formatCurrency(salary.da);

        document.getElementById("grossResult").innerHTML =
        formatCurrency(salary.gross);

        // Enable Button Again
        calculateBtn.disabled = false;

        calculateBtn.innerHTML =
        "Calculate Gross Salary";

    }, 500);

}

function resetForm(){

    document.getElementById("basicSalary").value = "";

    document.getElementById("errorMsg").innerHTML = "";

    document.getElementById("resultCard")
    .classList.add("d-none");

    document.getElementById("successMsg")
    .classList.add("d-none");

}