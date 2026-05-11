function calculateBill() {

    let units = parseInt(document.getElementById("units").value);

    let resultCard = document.getElementById("resultCard");
    let billDetails = document.getElementById("billDetails");

    if (isNaN(units) || units < 0) {

        alert("Please enter valid units.");
        return;
    }

    let remainingUnits = units;

    let firstSlabUnits = 0;
    let secondSlabUnits = 0;
    let thirdSlabUnits = 0;
    let fourthSlabUnits = 0;

    let firstSlabCharge = 0;
    let secondSlabCharge = 0;
    let thirdSlabCharge = 0;
    let fourthSlabCharge = 0;

    
    if (remainingUnits > 0) {

        firstSlabUnits = Math.min(remainingUnits, 50);

        firstSlabCharge = firstSlabUnits * 0.50;

        remainingUnits -= firstSlabUnits;
    }

    
    if (remainingUnits > 0) {

        secondSlabUnits = Math.min(remainingUnits, 150);

        secondSlabCharge = secondSlabUnits * 0.75;

        remainingUnits -= secondSlabUnits;
    }

    
    if (remainingUnits > 0) {

        thirdSlabUnits = Math.min(remainingUnits, 250);

        thirdSlabCharge = thirdSlabUnits * 1.20;

        remainingUnits -= thirdSlabUnits;
    }

    
    if (remainingUnits > 0) {

        fourthSlabUnits = remainingUnits;

        fourthSlabCharge = fourthSlabUnits * 1.50;
    }

   
    let subtotal =
        firstSlabCharge +
        secondSlabCharge +
        thirdSlabCharge +
        fourthSlabCharge;

    
    let surcharge = subtotal * 0.20;

    
    let grandTotal = subtotal + surcharge;

    
    resultCard.classList.remove("d-none");

    billDetails.innerHTML = `

        <div class="bill-row">
            <span>First 50 Units (${firstSlabUnits} × ₹0.50)</span>
            <span>₹${firstSlabCharge.toFixed(2)}</span>
        </div>

        <div class="bill-row">
            <span>51 - 200 Units (${secondSlabUnits} × ₹0.75)</span>
            <span>₹${secondSlabCharge.toFixed(2)}</span>
        </div>

        <div class="bill-row">
            <span>201 - 450 Units (${thirdSlabUnits} × ₹1.20)</span>
            <span>₹${thirdSlabCharge.toFixed(2)}</span>
        </div>

        <div class="bill-row">
            <span>Above 450 Units (${fourthSlabUnits} × ₹1.50)</span>
            <span>₹${fourthSlabCharge.toFixed(2)}</span>
        </div>

        <hr>

        <div class="bill-row">
            <span>Subtotal</span>
            <span>₹${subtotal.toFixed(2)}</span>
        </div>

        <div class="bill-row">
            <span>20% Surcharge</span>
            <span>₹${surcharge.toFixed(2)}</span>
        </div>

        <hr>

        <div class="bill-row total">
            <span>Grand Total</span>
            <span>₹${grandTotal.toFixed(2)}</span>
        </div>

    `;
}

function resetBill() {

    document.getElementById("units").value = "";

    document.getElementById("resultCard").classList.add("d-none");

    document.getElementById("billDetails").innerHTML = "";
}