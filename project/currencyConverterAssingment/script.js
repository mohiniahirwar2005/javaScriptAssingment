const country = [

 {
    countryCode: "IN",
    countryName: "INDIA",
    currencyCode: "INR",
  },
  {
    countryCode: "US",
    countryName: "UNITED STATES",
    currencyCode: "USD",
  },
 
  {
    countryCode: "GB",
    countryName: "UNITED KINGDOM",
    currencyCode: "GBP",
  },
  {
    countryCode: "JP",
    countryName: "JAPAN",
    currencyCode: "JPY",
  },
  {
    countryCode: "CA",
    countryName: "CANADA",
    currencyCode: "CAD",
  },
];

function loadSelectOption() {
  const country1 = document.getElementById("country1");

  const country2 = document.getElementById("country2");

  country.forEach((item) => {
    const op1 = document.createElement("option");

    op1.value = item.countryCode + "_" + item.currencyCode;

    op1.innerText = item.countryName;

    country1.appendChild(op1);

    const op2 = document.createElement("option");

    op2.value = item.countryCode + "_" + item.currencyCode;

    op2.innerText = item.countryName;

    country2.appendChild(op2);
  });

  country1.value = "US_USD";
  country2.value = "IN_INR";

  FetchFlag1();
  FetchFlag2();
}

loadSelectOption();

function FetchFlag1() {
  const code = document.getElementById("country1").value;

  if (!code) return;

  const countryCode = code.split("_")[0];

  document.getElementById("country1Flag").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}

function FetchFlag2() {
  const code = document.getElementById("country2").value;

  if (!code) return;

  const countryCode = code.split("_")[0];

  document.getElementById("country2Flag").src =
    `https://flagsapi.com/${countryCode}/flat/64.png`;
}

async function ConvertCurrency() {
  const from = document.getElementById("country1").value;

  const to = document.getElementById("country2").value;

  const amount = document.getElementById("amount").value;

  if (!amount || amount <= 0) {
    document.getElementById("result").innerText = "Enter Valid Amount";

    return;
  }

  const fromCurrency = from.split("_")[1];

  const toCurrency = to.split("_")[1];

  const response = await fetch(
    `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${fromCurrency.toLowerCase()}.json`,
  );

  const data = await response.json();

  const rate = data[fromCurrency.toLowerCase()][toCurrency.toLowerCase()];

  const convertedAmount = amount * rate;

  document.getElementById("result").innerText =
    convertedAmount.toFixed(2) + " " + toCurrency;
}

function swapCountries() {
  const c1 = document.getElementById("country1");

  const c2 = document.getElementById("country2");

  const temp = c1.value;

  c1.value = c2.value;

  c2.value = temp;

  FetchFlag1();
  FetchFlag2();

  if (document.getElementById("amount").value) {
    ConvertCurrency();
  }
}
