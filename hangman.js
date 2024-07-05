// Use "input()" to input a line from the user (package from https://github.com/hyperskill/sync-input)
// Use "input(str)" to print some text before requesting input
// You will need this in the following stages

const input = require('sync-input')

// Welcome message
console.log("H A N G M A N");

// Choose random word
let listOfWords = ["python", "java", "swift", "javascript"];


// Scoreboard
let results = {
    wins: 0,
    losses: 0,
}

// Menu loop
while (true) {
    let choice = input("Type \"play\" to play the game, " +
        "\"results\" to show the scoreboard, " +
        "and \"exit\" to quit:");

    if (choice === "exit") {
        break;
    }

    if (choice === "play") {
        game();
    }

    if (choice === "results") {
        console.log(`You won: ${results.wins} times.\nYou lost: ${results.losses} times.\n`);
    }

}

function game() {
    let randomIndex = Math.floor(Math.random() * listOfWords.length);
    let word = listOfWords[randomIndex];

    // Hide the word
    let hiddenString = "-".repeat(word.length);
    // Game loop
    let attempts = 8;
    let guessesList = [];
    while (attempts > 0) {
        console.log("\n" + hiddenString);
        let guess = input(`Input a letter:`);

        // Check input exactly one letter
        if (guess.length !== 1) {
            console.log("Please, input a single letter.");
            continue;
        }

        // Check lowercase
        if (!guess.match(/[a-z]/)) {
            console.log("Please, enter a lowercase letter from the English alphabet.")
            continue;
        }

        // Players input a letter that has been successfully uncovered before;
        if (hiddenString.includes(guess) || guessesList.includes(guess)) {
            console.log("You've already guessed this letter.");
            continue;
        }

        guessesList.push(guess);

        // Guessed letter
        if (word.includes(guess)) {
            // If not winner uncover the letter and continue
            let hiddenArray = hiddenString.split('');
            for (let i = 0; i < word.length; i++) {
                if (word[i] === guess) {
                    hiddenArray[i] = guess;
                }
            }
            hiddenString = hiddenArray.join('');

            // Check the winning and if winner break the loop
            if (!hiddenString.includes("-")) {
                results.wins += 1;
                console.log(`You guessed the word ${word}!`);
                console.log("You survived!");
                break;
            }
            continue;
        }

        // Letter not guessed well
        console.log("That letter doesn't appear in the word.\n");
        attempts--;
    }

// Check losing
    if (attempts === 0) {
        results.losses += 1;
        console.log("You lost!");
    }
}


