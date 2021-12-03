const operation = process.argv[2];
const number1 = process.argv[3];
const number2 = process.argv[4];
let result;

if (process.argv.length !== 5) {
    console.log("São necessários três parâmetros: operação, número 1 e número 2.");
} else {
    switch (operation) {
        case "add":
            result = Number(number1) + Number(number2);
            break;
        case "sub":
            result = Number(number1) - Number(number2);
            break;
        case "div":
            result = Number(number1) / Number(number2);
            break;
        case "mult":
            result = Number(number1) * Number(number2);
    }
    console.log("Result: ", result);
}