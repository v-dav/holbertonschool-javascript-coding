// Use "input()" to input a line from the user
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages
const input = require('sync-input')

// Cup property
const cupIngredients = {
    water: 200,
    milk: 50,
    "coffee beans": 15,
}

// Machine supplies
let supplies = {
    water: 400,
    milk: 540,
    "coffee beans": 120,
    money: 550,
    cups: 9
}


function machineInFunction() {
    while (true)  {
        let action = input("Write action (buy, fill, take, remaining, exit):\n")
        if (action === "buy") {
            buyCoffee();
        } else if (action === "fill") {
            fillMachine();
        } else if (action === "take") {
            takeMoney();
        } else if (action === "exit") {
            break;
        } else if (action === "remaining") {
            printMachineState();
        }
    }
}

function buyCoffee() {
    const espresso = {water: 250, milk: 0, "coffee beans": 16, cost: 4};
    const latte = {water: 350, milk: 75, "coffee beans": 20, cost: 7};
    const cappuccino = {water: 200, milk: 100, "coffee beans": 12, cost: 6};
    const coffeeMenu = [espresso, latte, cappuccino];

    let coffeeChoiceIndex = input("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino, back - to main menu:\n");
    if (coffeeChoiceIndex === "back") {
        return;
    }
    coffeeChoiceIndex = Number(coffeeChoiceIndex) - 1;

    const coffee = coffeeMenu[coffeeChoiceIndex];
    const enoughSupplies = checkEnoughSupplies(coffee);
    if (enoughSupplies) {
        console.log("I have enough resources, making you a coffee!\n");
        for (const consumable of Object.keys(supplies)) {
            if (Object.hasOwn(coffee, consumable)) {
                supplies[consumable] -= coffee[consumable];
            }
        }
        supplies.money += coffee.cost;
        supplies.cups --;
    } else {
        console.log(`Sorry, not enough ${getLackingIngredient(coffee)}!`);
    }
}

function fillMachine() {
    let waterAmount = Number(input("Write how many ml of water you want to add:\n"));
    let milkAmount = Number(input("Write how many ml of milk you want to add:\n"));
    let beansAmount = Number(input("Write how many grams of coffee beans you want to add:\n"));
    let cupsAmount = Number(input("Write how many disposable cups you want to add:\n"));

    supplies.water += waterAmount;
    supplies.milk += milkAmount;
    supplies.cups += cupsAmount;
    supplies["coffee beans"] += beansAmount;
}

function takeMoney() {
    console.log(`I gave you $${supplies.money}`);
    supplies.money = 0;
}

function printMachineState() {
    console.log(`\nThe coffee machine has:\n` +
        `${supplies.water} ml of water\n` +
        `${supplies.milk} ml of milk\n` +
        `${supplies["coffee beans"]} g of coffee beans\n` +
        `${supplies.cups} disposable cups\n` +
        `$${supplies.money} of money\n`)
}

function checkEnoughSupplies(coffee) {
    let enoughWater = (supplies.water - coffee.water) >= 0;
    let enoughMilk = (supplies.milk - coffee.milk) >= 0;
    let enoughCups = (supplies.cups - 1) >= 0;
    let enoughBeans = (supplies["coffee beans"] - coffee["coffee beans"]) >= 0;

    return enoughWater && enoughMilk && enoughCups && enoughBeans;
}

function getLackingIngredient(coffee) {
    if ((supplies.water - coffee.water) < 0) {
        return "water";
    }
    if ((supplies.milk - coffee.milk) < 0) {
        return "milk";
    }
    if ((supplies.cups - 1) < 0) {
        return "cups";
    }
    if (supplies["coffee beans"] - coffee["coffee beans"] < 0) {
        return "coffee beans";
    }
}

machineInFunction();
