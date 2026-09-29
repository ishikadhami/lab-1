const crypto = require("crypto");

function rollDice() {
    const number = crypto.randomInt(1, 7);
    return number;
}

for (let i = 1; i <= 5; i++) {
    console.log("Dice Rolled:", rollDice());
}