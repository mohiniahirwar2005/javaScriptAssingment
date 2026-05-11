function Calculate(data) {
  const equation = document.getElementById("text");
  if (data === "AC") {
    equation.innerText = "0";
    return;
  }

  if (data === "C") {
    // const eq = equation.innerText;

    // let newEQ = eq.slice(0, -1);

    // equation.innerText = newEQ;

    equation.innerText = equation.innerText.slice(0, -1);
    return;
  }

  if (data === "=") {
    const EQ = equation.innerText;
    const solution = eval(EQ);
    equation.innerText = solution;
    return;
  }

  if (equation.innerText === "0") {
    equation.innerText = data;
  } else {
    equation.innerText = equation.innerText + data;
  }
}



document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    Calculate(key);
  }
  else if (key === "+" || key === "-" || key === "*" || key === "/") {
    Calculate(key);
  }
  else if (key === ".") {
    Calculate(".");
  }
  else if (key === "Enter" || key === "=") {
    Calculate("=");
  }
  else if (key === "Backspace") {
    Calculate("C");
  }
  else if (key === "Escape") {
    Calculate("AC");
  }
  else if (key === "%") {
    Calculate("%");
  }
  else {
    return;
  }
});



