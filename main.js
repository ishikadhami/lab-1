const isEven = require("./isEven");

const number = 17;

if (isEven(number)) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}