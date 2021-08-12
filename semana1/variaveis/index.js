// Exercícios de interpretação de código

// Exercício 1
// Imprimirá:
// 10
// 10 5

// Exercício 2
//Imprimirá:
// 10 10 10

// Exercício 3
// let horasDia = prompt("Quantas horas você trabalha por dia?")
// let salarioDia = prompt("Quanto você recebe por dia?")

// ----------------------------------

// Exercícios de escrita de código

// Exercício 1

let nome;
let idade;

console.log(typeof nome);
console.log(typeof idade);
// D) Foi impresso o tipo "undefined", porque não foram atribuídos valores às variáveis. 

nome = prompt("Qual o seu nome?");
idade = prompt("Qual a sua idade?");
console.log(typeof nome, typeof idade);
// F) Os tipos das duas variáveis são "string".

console.log("Olá ", nome, ", você tem ", idade, "anos.");

//Exercício 2
const pergunta1 = "Você é brasileire?";
const pergunta2 = "Você gosta de ler?";
const pergunta3 = "Voce gosta de açaí?";

let resposta1 = prompt(pergunta1);
let resposta2 = prompt(pergunta2);
let resposta3 = prompt(pergunta3);

console.log(pergunta1, " - ", resposta1);
console.log(pergunta2, " - ", resposta2);
console.log(pergunta3, " - ", resposta3);

// Exercício 3

let a = 10;
let b = 25;
let c;

c = a;
a = b;
b = c;

console.log("O novo valor de a é", a)
console.log("O novo valor de b é", b)

//DESAFIO
let num1 = Number(prompt("Digite um número: "));
let num2 = Number(prompt("Digite outro número: "));
let soma = num1 + num2;
let produto = num1 * num2;
console.log("O primeiro número somado ao segundo número resulta em: ", soma);
console.log(" O primeiro número multiplicado pelo segundo número resulta em: ", produto);