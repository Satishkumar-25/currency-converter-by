const currencyList = [
  "USD","INR","EUR","GBP","JPY","AUD","CAD","CHF","CNY","NZD","AED","SAR",
  "SGD","HKD","SEK","NOK","DKK","ZAR","BRL","RUB","TRY","MXN","IDR","THB",
  "PLN","PHP","MYR","VND","EGP","BDT","PKR","KWD","QAR","BHD","OMR","LKR",
  "NGN","KES","ARS","CZK","HUF","ILS","KRW","RON"
];

// Populate Dropdowns
const fromDropdown = document.getElementById("fromCurrency");
const toDropdown = document.getElementById("toCurrency");

currencyList.forEach(currency => {
  let option1 = document.createElement("option");
  let option2 = document.createElement("option");
  option1.value = option1.text = currency;
  option2.value = option2.text = currency;
  fromDropdown.add(option1);
  toDropdown.add(option2);
});

fromDropdown.value = "USD";
toDropdown.value = "INR";

// API Based Conversion
async function convertCurrency() {
  const amount = document.getElementById("amount").value;
  const from = fromDropdown.value;
  const to = toDropdown.value;

  if (amount === "" || amount <= 0) {
    alert("Please enter a valid amount!");
    return;
  }

  const response = await fetch(`https://api.exchangerate.host/convert?from=${from}&to=${to}&amount=${amount}`);
  const data = await response.json();

  document.getElementById("result").innerText =
    `${amount} ${from} = ${data.result.toFixed(2)} ${to}`;
}s
