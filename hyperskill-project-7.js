const input = require('sync-input');

// Welcome message
welcome();

// Initialization of shop
let tickets = 0;
const gifts = [
    new Gift("Teddy Bear", 10, 1),
    new Gift("Big Red Ball", 5, 2),
    new Gift("Huge Bear", 50, 3),
    new Gift("Candy", 8, 4),
    new Gift("Stuffed Tiger", 15, 5),
    new Gift("Stuffed Dragon", 30, 6),
    new Gift("Skateboard", 100, 7),
    new Gift("Toy Car", 25, 8),
    new Gift("Basketball", 20, 9),
    new Gift("Scary Mask", 75, 10),
]
showGifts(gifts);

// Menu part
while (true) {
    let action = Number(input("\nWhat do you want to do?\n" +
        "1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop"));
    if (action === 1) {
        getGift(gifts);
    } else if (action === 2) {
        addTickets();
    } else if (action === 3) {
        checkTickets();
    } else if (action === 4) {
        showGifts(gifts);
    } else if (action === 5) {
        break;
    } else if (isNaN(Number(action)) || action < 1 || action > 5) {
        console.log("Please enter a valid number!");
    }
}


// Good buy message
goodbye();

function getGift(gifts) {
    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    let giftId = Number(input("Enter the number of the gift you want to get:"));
    if (isNaN(giftId)) {
        console.log("Please enter a valid number!");
        return;
    }

    let chosenGift = gifts.find(gift => gift.idOrder === giftId);

    if (chosenGift === undefined) {
        console.log("There is no gift with that number!");
        return;
    }

    if (tickets < chosenGift.price) {
        console.log("You don't have enough tickets to buy this gift.");
        return;
    }

    console.log(`Here you go, one ${chosenGift.name}!`);
    tickets -= chosenGift.price;
    gifts.splice(gifts.indexOf(chosenGift), 1);
    checkTickets();
}

function addTickets() {
    let ticketAmount = Number(input("Enter the ticket amount:"));
    if (isNaN(ticketAmount) || ticketAmount < 0 || ticketAmount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
        return;
    }
    tickets += ticketAmount;
    checkTickets();
}

function checkTickets() {
    console.log(`Total tickets: ${tickets}`);
}

function showGifts(gifts) {
    console.log("Here's the list of gifts:\n");

    if (gifts.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }

    for (const gift of gifts) {
        console.log(`${gift.idOrder}- ${gift.name}, Cost: ${gift.price} tickets`);
    }
}

function Gift(name, price, idOrder) {
    this.name = name;
    this.price = price;
    this.idOrder = idOrder;
}

function goodbye() {
    console.log("Have a nice day!");
}

function welcome() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
    console.log("Hello friend! Thank you for visiting the carnival!");
}
