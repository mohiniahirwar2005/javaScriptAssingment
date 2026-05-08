function ChangeBgColor() {
    document.getElementById("div1").style.backgroundColor = document.getElementById("bgColor").value;
}

function ChangeHeadingColor() {
    document.getElementById("heading").style.color = document.getElementById("headingColor").value;
}

function ChangeParaColor() {
    document.getElementById("para").style.color = document.getElementById("paraColor").value;
}

function resetAll() {
    window.location.reload();
}

document.getElementById("bgColor").addEventListener("input", ChangeBgColor);

document.getElementById("headingColor").addEventListener("input", ChangeHeadingColor);

document.getElementById("paraColor").addEventListener("input", ChangeParaColor);

document.getElementById("resetBtn").addEventListener("click", resetAll);