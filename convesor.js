const convertButton = document.querySelector(".convert-button");
const currencySelect = document.querySelector(".currency-select");

function convertValues() {
    const inputCurrencyValue = document.querySelector(".input-currency").value;
    const currencyValueToConverse = document.querySelector(".currency-value-to-converse");
    const currencyValueConverted = document.querySelector(".currency-value");

    console.log(currencySelect.value);
    const dolarToday = 4.98;
    const euroToday = 5.34;
    const libraToday = 6.23;
    const bitcoinToday = 209.4;
    const ieneToday = 0.34;
    const rubloToday = 0.54;

    if (currencySelect.value == "Dolar") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputCurrencyValue / dolarToday);
    }

    if (currencySelect.value == "Euro") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputCurrencyValue / euroToday);
    }

    if (currencySelect.value == "Libra") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "currency",
            currency: "GBP"
        }).format(inputCurrencyValue / libraToday);
    }

    if (currencySelect.value == "Iene") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputCurrencyValue / ieneToday);
    }

    if (currencySelect.value == "Rublo") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("ru-RU", {
            style: "currency",
            currency: "RUB"
        }).format(inputCurrencyValue / rubloToday);
    }

    if (currencySelect.value == "Bitcoin") {
        currencyValueConverted.innerHTML = new Intl.NumberFormat("en-GB", {
            style: "decimal",
            minimumFractionDigits: 6, 
            maximumFractionDigits: 6 
        }).format(inputCurrencyValue / bitcoinToday);
    }

    currencyValueToConverse.innerHTML = new Intl.NumberFormat("pt-br", {
        style: "currency",
        currency: "BRL"
    }).format(inputCurrencyValue);
    
}

function changeCurrency() {
    const currencyDolar = document.querySelector(".currency-dolar");
    const currencyImg = document.querySelector(".currency-img");

    if (currencySelect.value == "Dolar") {
        currencyDolar.innerHTML = "Dólar";
        currencyImg.src = "./assets/dolar.png";
    }

    if (currencySelect.value == "Euro") {
        currencyDolar.innerHTML = "Euro";
        currencyImg.src = "./assets/europa.png";
    }

    if (currencySelect.value == "Libra") {
        currencyDolar.innerHTML = "Libra";
        currencyImg.src = "./assets/Libra.png";
    }

    if (currencySelect.value == "Bitcoin") {
        currencyDolar.innerHTML = "Bitcoin";
        currencyImg.src = "./assets/bitcoin.png";
    }

    if (currencySelect.value == "Iene") {
        currencyDolar.innerHTML = "Iene";
        currencyImg.src = "./assets/iene.png";
    }

    if (currencySelect.value == "Rublo") {
        currencyDolar.innerHTML = "Rublo";
        currencyImg.src = "./assets/rubro.png";
    }

    convertValues();
}

currencySelect.addEventListener("change", changeCurrency);
convertButton.addEventListener("click", convertValues);
