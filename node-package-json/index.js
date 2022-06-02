// // Exercício 1
// // a) guardamos em uma variável a propriedade process.argv a partir da posição 2, ou seja, process.argv[2];

// // b)

// const name = process.argv[2];
// const age = Number(process.argv[3]);

// console.log(`Olá, ${name}! Você tem ${age} anos.`);

// // c)
// const ageInSevenYears = age + 7;

// console.log(`Olá, ${name}! Você tem ${age} anos. Em sete anos você terá ${ageInSevenYears} anos.`);

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