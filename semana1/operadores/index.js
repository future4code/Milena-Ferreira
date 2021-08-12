// // Exercícios de interpretação de código

// // EXERCÍCIO 1 
// // a. false
// // b. false
// // c. true
// // d. boolean

// // EXERCÍCIO 2
// // Faltou converter os valores recebidos pelo prompt para Number. Da forma como está, não será feita uma operação aritmética de soma entre as variáveis, e sim uma concatenação delas, já que todo valor passado através do prompt é uma string.

// // EXERCÍCIO 3 

// // Converter os valores do prompt em number:

// let primeiroNumero = Number(prompt("Digite um numero!"))
// let segundoNumero = Number(prompt("Digite outro numero!"))
// const soma = primeiroNumero + segundoNumero
// console.log(soma)


// // -------------------------------------------------

// // Exercícios de escrita de código

// // EXERCÍCIO 1 
// let suaIdade = Number(prompt("Digite sua idade:"));
// let idadeAmigo = Number(prompt("Digite a idade de seu melhor amigo ou sua melhor amiga:"));
// let maiorIdade = suaIdade > idadeAmigo;
// let difIdade = suaIdade - idadeAmigo;
// console.log("Sua idade é maior do que a do seu melhor amigo? ", maiorIdade);
// console.log("Diferença de idade: ",    difIdade)

// // EXERCÍCIO 2

// const numPar = Number(prompt("Insira um número par: "));
// console.log(numPar % 2);

// // c) O resultado é sempre 0.
// // d) O resultado será 1.


// // EXERCÍCIO 3

// let idadeAnos = Number(prompt("Digite sua idade em anos:"));
// let idadeMeses = idadeAnos * 12;
// let idadeDias = idadeAnos * 365;
// let idadeHoras = idadeDias * 24;

// console.log(idadeMeses);
// console.log(idadeDias);
// console.log(idadeHoras);

// // EXERCÍCIO 4

// let num1 = Number(prompt("Digite um numero!"));
// let num2 = Number(prompt("Digite outro numero!"));

// console.log("Primeiro número: ", num1);
// console.log("Segundo número: ", num2);
// console.log("O primeiro numero é maior que segundo?", num1 > num2);
// console.log("O primeiro numero é igual ao segundo?", num1 === num2);
// console.log("O primeiro numero é divisível pelo segundo?", num1 % num2 === 0);
// console.log("O segundo numero é divisível pelo primeiro?", num2 % num1 === 0);

// // -------------------------------------------------

// // DESAFIOS

// // DESAFIO 1

// let fahrenheit;
// let celsius;
// let kelvin;

// // a)
// celsius = 80;
// fahrenheit = celsius * 9/5 + 32;
// console.log(celsius, "ºC = ", fahrenheit, "ºF");

// // b)
// fahrenheit = 77;
// kelvin = (fahrenheit - 32) * (5/9) + 273.15;
// console.log(fahrenheit, "ºF = ", kelvin, "K");

// //c)
// celsius = 30;
// fahrenheit = celsius * 9/5 + 32;
// console.log(celsius, "ºC = ", fahrenheit, "ºF");
// kelvin = (fahrenheit - 32) * (5/9) + 273.15;
// console.log(fahrenheit, "ºF = ", kelvin, "K");

// // d)
// celsius = Number(prompt("Insira a temperatura em ºC:"));
// fahrenheit = celsius * 9/5 + 32;
// console.log(celsius, "ºC = ", fahrenheit, "ºF");
// kelvin = (fahrenheit - 32) * (5/9) + 273.15;
// console.log(fahrenheit, "ºF = ", kelvin, "K");

// // DESAFIO 2

// // a)
// let consumo = 280;
// let valorConta = consumo * 0.05;
// console.log("Valor a ser pago para consumo de ", consumo, " kWh: R$", valorConta);

// // b) 
// valorConta = consumo * 0.05 * (1 - 0.15);
// console.log("Valor com desconto de 15%: R$", valorConta);

// // DESAFIO 3

// // a)
// let libras = 20;
// let kilos = (libras / 2.2046).toFixed(2);
// console.log(libras, "lb equivalen a ", kilos, "kg");

// // b)
// let oncas = 10.5;
// kilos = (oncas / 35.274).toFixed(2);
// console.log(oncas, "oz equivalem a ", kilos, "kg");

// // c)
// let milhas = 100;
// let metros = milhas * 1609;
// console.log(milhas, "mi equivalem a ", metros, "m");

// // d)
// let pes = 50;
// metros = (pes / 3.281).toFixed(2);
// console.log(pes, "ft equivalem a ", metros, "m");

// // e)
// let gal = 103.56;
// let litros = (gal * 3.785412).toFixed(2);
// console.log(gal, "gal equivalem a ", litros, "L");

// // f)
// let xic = 450;
// litros = xic * 6 / 25;
// console.log(xic, "xic equivalem a ", litros, "L");

// // g)
// xic = Number(prompt("Informe a quantidade de xícaras: "));
// litros = xic * 6 / 25;
// console.log(xic, "xic equivalem a ", litros, "L");