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
};




document.addEventListener("keydown", function (event) {
  const key = event.key;

  console.log("Key Pressed:", key);

  
  if (!isNaN(key)) {
    Calculate(key);
    console.log("Number:", key);
  }

 
  if (key === "+" || key === "-" || key === "*" || key === "/") {
    Calculate(key);
    console.log("Operator:", key);
  }

 
  if (key === ".") {
    Calculate(".");
    console.log("Decimal Pressed");
  }

  
  if (key === "Enter") {
    event.preventDefault();
    Calculate("=");
    console.log("Answer Calculated");
  }

 
  if (key === "Backspace") {
    Calculate("C");
    console.log("Last Value Deleted");
  }

  if (key === "Escape") {
    Calculate("AC");
    console.log("Calculator Cleared");
  }
});

