const country1 = document.getElementById("country1");
const country2 = document.getElementById("country2");

const flag1 = document.getElementById("flag1");
const flag2 = document.getElementById("flag2");

const amountInput = document.getElementById("orgAmount");

const convertBtn = document.getElementById("convertBtn");

const newAmount = document.getElementById("newAmount");
const rateText = document.getElementById("rateText");

const loading = document.getElementById("loading");

const fromError = document.getElementById("fromError");
const toError = document.getElementById("toError");
const amountError = document.getElementById("amountError");
const generalError = document.getElementById("generalError");

const swapBtn = document.getElementById("swapBtn");


async function loadCountries() {

  try {

    const response = await fetch("currency.json");
    const data = await response.json();

    const uniqueCountries = [];

    data.forEach((item) => {

      if (
        item.Currency_Code &&
        !uniqueCountries.some(
          (country) =>
            country.Country === item.Country
        )
      ) {
        uniqueCountries.push(item);
      }
    });

    uniqueCountries.forEach((item) => {

      const option1 = document.createElement("option");
      option1.value =
        `${item.Currency_Code.toLowerCase()},${item.Country_Code}`;

      option1.textContent = item.Country;

      const option2 = option1.cloneNode(true);

      country1.appendChild(option1);
      country2.appendChild(option2);
    });

    
    country1.value = "usd,US";
    country2.value = "inr,IN";

    updateFlag(country1, flag1);
    updateFlag(country2, flag2);

  } catch (error) {

    generalError.innerText =
      "Failed to load country list.";
  }
}


function updateFlag(select, img) {

  const value = select.value;

  if (!value) return;

  const countryCode = value.split(",")[1];

  img.src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;

  img.onerror = () => {
    img.src =
      "https://cdn-icons-png.flaticon.com/512/44/44386.png";
  };
}


country1.addEventListener("change", () => {
  updateFlag(country1, flag1);
  fromError.innerText = "";
});

country2.addEventListener("change", () => {
  updateFlag(country2, flag2);
  toError.innerText = "";
});

amountInput.addEventListener("input", () => {
  amountError.innerText = "";
});


function validateInputs() {

  let valid = true;

  fromError.innerText = "";
  toError.innerText = "";
  amountError.innerText = "";
  generalError.innerText = "";

  if (!country1.value) {
    fromError.innerText =
      "Please select a 'From' country.";
    valid = false;
  }

  if (!country2.value) {
    toError.innerText =
      "Please select a 'To' country.";
    valid = false;
  }

  if (!amountInput.value) {
    amountError.innerText =
      "Please enter an amount.";
    valid = false;
  } else if (Number(amountInput.value) <= 0) {
    amountError.innerText =
      "Amount must be greater than zero.";
    valid = false;
  }

  return valid;
}


async function convertCurrency() {

  if (!validateInputs()) return;

  loading.classList.remove("d-none");

  convertBtn.innerText = "Loading...";

  newAmount.innerText = "";
  rateText.innerText = "";

  try {

    const amount = Number(amountInput.value);

    const fromCurrency =
      country1.value.split(",")[0];

    const toCurrency =
      country2.value.split(",")[0];

    // Same Currency
    if (fromCurrency === toCurrency) {

      newAmount.innerText =
        `${amount.toFixed(2)} ${toCurrency.toUpperCase()}`;

      rateText.innerText =
        `1 ${fromCurrency.toUpperCase()} = 1 ${toCurrency.toUpperCase()}`;

      return;
    }

    const response = await fetch(
      `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency}.json`
    );

    const data = await response.json();

    const rate =
      data[fromCurrency][toCurrency];

    const result = amount * rate;

    newAmount.innerText =
      `${result.toFixed(2)} ${toCurrency.toUpperCase()}`;

    rateText.innerText =
      `1 ${fromCurrency.toUpperCase()} = ${rate.toFixed(2)} ${toCurrency.toUpperCase()}`;

  } catch (error) {

    generalError.innerText =
      "Something went wrong. Please try again.";
  }

  finally {

    loading.classList.add("d-none");

    convertBtn.innerText = "Convert";
  }
}


convertBtn.addEventListener(
  "click",
  convertCurrency
);


swapBtn.addEventListener("click", () => {

  const temp = country1.value;

  country1.value = country2.value;

  country2.value = temp;

  updateFlag(country1, flag1);
  updateFlag(country2, flag2);

  if (amountInput.value) {
    convertCurrency();
  }
});


loadCountries();