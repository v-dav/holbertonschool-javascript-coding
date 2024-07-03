const input = require('sync-input');

// We have imported the 'sync-input' package for you.
// This package allows you to get user input.
// Like so:
// let name = input("Type your name: ");
// let age = Number(input("Type your age: "));
// You will need it in later stages.

let earnedIncome = {
    Bubblegum: 202,
    Toffee: 118,
    "Ice cream": 2250,
    "Milk chocolate": 1680,
    Doughnut: 1075,
    Pancake: 80,
}

console.log('Earned amount:');
let sum = 0.0;

for (const [item, price] of Object.entries(earnedIncome)) {
    sum += price;
    console.log(`${item}: ${price}`);
}

console.log(`Income: ${sum}`);
let staffExpenses = Number(input("Staff expenses:"));
let otherExpenses = Number(input("Other expenses:"));

console.log(`Net income: $${sum - otherExpenses - staffExpenses}`);
