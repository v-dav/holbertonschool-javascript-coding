// Welcome to the Currency Converter!

const input = require('sync-input');

const exchangeRates = {
    USD: 1.0,
    JPY: 113.5,
    EUR: 0.89,
    RUB: 74.36,
    GBP: 0.75
}

welcome();

while(true) {
    console.log("What do you want to do?\n1-Convert currencies 2-Exit program");
    const choice = Number(input());
    if (isNaN(choice) || (choice !== 1 && choice !== 2)) {
        console.log("Unknown input");
    } else if (choice === 1) {
        getInputAndProcess();
    } else {
        console.log("Have a nice day!");
        break;
    }
}

function welcome () {
    console.log("Welcome to Currency Converter!");
    for (const [key, value] of Object.entries(exchangeRates)) {
        console.log(key === "USD" ? "1 USD equals 1 USD" : `1 USD equals ${value} ${key}`);
    }
}

function getInputAndProcess () {
    console.log("What do you want to convert?");
    const currencyToConvertFrom = input("From: ").toUpperCase();
    if (!Object.hasOwn(exchangeRates, currencyToConvertFrom)) {
        console.log("Unknown currency");
    } else {
        const currencyToConvertTo = input("To: ").toUpperCase();
        if (!Object.hasOwn(exchangeRates, currencyToConvertTo)) {
            console.log("Unknown currency");
        } else {
            const amountToConvert = Number(input("Amount: "));
            if (isNaN(amountToConvert)) {
                console.log("The amount has to be a number");
            } else if (amountToConvert < 1) {
                console.log("The amount cannot be less than 1");
            } else {
                let result;
                if (currencyToConvertFrom === "USD") {
                    result = (amountToConvert * exchangeRates[currencyToConvertTo]).toFixed(4);
                } else {
                    const toUsd = amountToConvert / exchangeRates[currencyToConvertFrom];
                    result = (toUsd * exchangeRates[currencyToConvertTo]).toFixed(4);
                }
                console.log(`Result: ${amountToConvert} ${currencyToConvertFrom}`+
                    ` equals ${result} ${currencyToConvertTo}`);
            }
        }
    }
}
