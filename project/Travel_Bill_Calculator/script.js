// Assumed Fare Rules:
// First 10 KM = ₹11 per KM
// Remaining KM = ₹10 per KM

function calculateBill(){

    let km = parseFloat(document.getElementById("kmInput").value);

    let errorMsg = document.getElementById("errorMsg");

    let resultCard = document.getElementById("resultCard");

    let breakdown = document.getElementById("breakdown");

    let totalBillText = document.getElementById("totalBill");

    // Validation
    if(isNaN(km) || km < 0){

        errorMsg.innerHTML =
        "Please enter a non-negative number of kilometres.";

        resultCard.classList.add("d-none");

        return;
    }

    errorMsg.innerHTML = "";

    // Slab Calculations
    let firstSlabKm = 0;
    let secondSlabKm = 0;

    let firstSlabCost = 0;
    let secondSlabCost = 0;

    // First 10 KM
    firstSlabKm = Math.min(km, 10);

    firstSlabCost = firstSlabKm * 11;

    // Remaining KM
    if(km > 10){

        secondSlabKm = km - 10;

        secondSlabCost = secondSlabKm * 10;
    }

    // Total
    let totalBill = firstSlabCost + secondSlabCost;

    // Show Result Card
    resultCard.classList.remove("d-none");

    // Breakdown
    breakdown.innerHTML = `

        <div class="bill-row">
            <span>
                ${firstSlabKm.toFixed(2)} km × ₹11
            </span>

            <span>
                ₹${firstSlabCost.toLocaleString('en-IN',{
                    minimumFractionDigits: 2
                })}
            </span>
        </div>

        <div class="bill-row">
            <span>
                ${secondSlabKm.toFixed(2)} km × ₹10
            </span>

            <span>
                ₹${secondSlabCost.toLocaleString('en-IN',{
                    minimumFractionDigits: 2
                })}
            </span>
        </div>

    `;

    // Total Bill
    totalBillText.innerHTML =
    totalBill.toLocaleString('en-IN',{
        minimumFractionDigits: 2
    });

}