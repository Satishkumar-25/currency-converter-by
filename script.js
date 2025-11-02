const fromCurrency = document.getElementById("fromCurrency");
const toCurrency = document.getElementById("toCurrency");
const amount = document.getElementById("amount");
const result = document.getElementById("result");

const currencies = ["USD", "INR", "EUR", "GBP", "JPY", "AUD", "CAD"];

currencies.forEach(cur => {
    fromCurrency.innerHTML += `<option value="${cur}">${cur}</option>`;
    toCurrency.innerHTML += `<option value="${cur}">${cur}</option>`;
});

async function convertCurrency() {
    const from = fromCurrency.value;
    const to = toCurrency.value;
    const amt = amount.value;

    if(amt === "" || amt <= 0) {
        result.innerText = "Please enter a valid amount!";
        return;
    }

    const res = await fetch(`https://api.exchangerate-api.com/v4/latest/${from}`);
    const data = await res.json();
    const rate = data.rates[to];

    result.innerText = `${amt} ${from} = ${(rate * amt).toFixed(2)} ${to}`;
}
