// // Exercícios de interpretação de código

// // Exercício 1

// // a) 10, 50
// // b) não apareceria nada

// // Exercício 2

// // a) A função converte todos os caracteres para letras minúsculas e depois verifica se a frase inserida contém a palavra "cenoura", retornando true em caso positivo, e false em caso negativo.
// // b)   i. true
// //      ii. true
// //      iii. true

// // --------------------------------------------------

// // Exercícios de escrita de código

// // Exercício 1

// // a)

// let nome = "Milena";
// let idade = 29;
// let cidade = "Belo Horizonte"
// let ocupacao = "estudante"

// function sobreMim() {
//     console.log
//         (`Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${ocupacao}.`);
// }
// sobreMim();

// //b)
// function sobreMim (nome, idade, cidade, profissao) {
//     console.log(`Eu sou ${nome}, tenho ${Number(idade)} anos, moro em ${cidade} e sou ${profissao}.`);
// }
// sobreMim("Milena", 29, "Belo Horizonte", "estudante");


// // Exercício 2

// // a)
// function somarDoisNumeros(num1, num2) {
//     return num1 + num2;
// }
// console.log(somarDoisNumeros(5, 6));

// // b)
// function maiorOuIgual (num1, num2) {
//     return num1 >= num2;
// }
// console.log(maiorOuIgual(2, 2));

// // c)
// function ePar (num) {
//     return num % 2 === 0;
// }
// console.log(ePar(5));

// d)
// function tamanhoMsg(msg) {
//     console.log(msg.length, msg.toUpperCase());
// }
// tamanhoMsg("Ouvindo Piep Piper");

// // Exercício 3
// function somar(num1, num2) {
//     return num1 + num2;
// }

// function subtrair(num1, num2) {
//     return num1 - num2;
// }

// function multiplicar(num1, num2) {
//     return num1 * num2;
// }

// function dividir(num1, num2) {
//     return num1 / num2;
// }

// const num1 = Number(prompt("Insira o primeiro número"));
// const num2 = Number(prompt("Insira o segundo número"));

// console.log("Números inseridos:", num1, " e ", num2);
// console.log("Soma: ", somar(num1, num2));
// console.log("Diferença: ", subtrair(num1, num2));
// console.log("Multiplicação: ", multiplicar(num1, num2));
// console.log("Divisão: ", dividir(num1, num2));

// // --------------------------------------------------

// // DESAFIOS

// Desafio 1
// a)
// let minhaFuncao = (parametro) => {
//     console.log(parametro);
// }
// // b)
// let somar = (num1, num2) => {
//     let soma = num1 + num2;
//     minhaFuncao(soma);
// }
// somar(6, 4);

// // Desafio 2

// let pitagoras = (cateto1, cateto2) => {
//     let somaQuadrados = cateto1**2 + cateto2**2;
//     return Math.sqrt(somaQuadrados);
// }
// console.log(pitagoras(7, 24));