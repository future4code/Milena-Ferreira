// Exercício 2

const operation = process.argv[2];
const firstNumber = Number(process.argv[3]);
const secondNumber = Number(process.argv[4]);
let result = 0;

switch (operation) {
    case "add":
        result = firstNumber + secondNumber;
        break;
    case "subtract":
        result = firstNumber - secondNumber;
        break;
    case "multiply":
        result = firstNumber * secondNumber;
        break;
    case "divide":
        result = firstNumber / secondNumber;
        break;
    default:
        console.log("Error");
}

console.log("Result: " + result);
