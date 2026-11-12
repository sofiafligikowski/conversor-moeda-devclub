const convertButton = document.querySelector("#convert-button")
const currencySelect = document.querySelector(".currency-select")

function convertValues() {
    const inputValue = document.querySelector(".input-value").value
    const valueToConvert = document.querySelector(".coin-value-to-convert")  //valor em real
    const coinValueConverted = document.querySelector(".coin-value") //outras moedas

    const dolarToday = 5.61
    const euroToday = 6.24
    const yuanToday = 0.84
    const ieneToday = 0.035
    const libraToday = 7.48



    if (currencySelect.value == "dolar") {
        coinValueConverted.innerHTML = new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD"
        }).format(inputValue / dolarToday)

    }

    if (currencySelect.value == "euro") {
        coinValueConverted.innerHTML = new Intl.NumberFormat("de-DE", {
            style: "currency",
            currency: "EUR"
        }).format(inputValue / euroToday)
    }

    if (currencySelect.value == "yuan") {
        coinValueConverted.innerHTML = new Intl.NumberFormat("zh-CN", {
            style: "currency",
            currency: "CNY"
        }).format(inputValue / yuanToday)
    }
    if (currencySelect.value == "iene") {
        coinValueConverted.innerHTML = new Intl.NumberFormat("ja-JP", {
            style: "currency",
            currency: "JPY"
        }).format(inputValue / ieneToday)
    }
    if (currencySelect.value == "libra") {
        coinValueConverted.innerHTML = new Intl.NumberFormat("en-CB", {
            style: "currency",
            currency: "GBP"
        }).format(inputValue / libraToday)

    }

    valueToConvert.innerHTML = new Intl.NumberFormat("pt-BR", {
        style: "currency",
        currency: "BRL"
    }).format(inputValue)

}

function changeCurrency() {
    const currencyName = document.getElementById("currency-name")
    const currencyImg = document.querySelector(".currency-img")

    if (currencySelect.value == "dolar") {
        currencyName.innerHTML = "Dólar americano"
        currencyImg.src = "./assets/icons8-eua-100.png"
    }

    if (currencySelect.value == "euro") {
        currencyName.innerHTML = "Euro"
        currencyImg.src = "./assets/icons8-euro-100.png"
    }

    if (currencySelect.value == "yuan") {
        currencyName.innerHTML = "Yuan"
        currencyImg.src = "./assets/icons8-china-100.png"
    }

    if (currencySelect.value == "iene") {
        currencyName.innerHTML = "Iene japonês"
        currencyImg.src = "./assets/icons8-japão-100.png"
    }

    if (currencySelect.value == "libra") {
        currencyName.innerHTML = "Libra esterlina"
        currencyImg.src = "./assets/icons8-inglaterra-40.png"
    }

    convertValues()

}

currencySelect.addEventListener("change", changeCurrency)
convertButton.addEventListener("click", convertValues)