// // Exercícios de interpretação de código

// // Exercício 1

// a) "a. undefined"
// b) "b. null"
// c) "c. 11"
// d) "d. 3"
// e) "e. [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]"
// f) "f. 9"

// // Exercício 2
// // "SUBI NUM ÔNIBUS EM MIRROCOS 27"

// // --------------------------------------------------

// // Exercícios de escrita de código

// // Exercício 1

// let nomeDoUsuario = prompt("Insira o nome do usuário");
// let emailDoUsuario = prompt("Insira o e-mail do usuário");
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vinda(o), ${nomeDoUsuario}!`);

// // Exercício 2

// // a)
// let comidasFavoritas = ["Pizza", "Hamburguer", "Chocolate", "Nhoque", "Lasanha"]
// console.log(comidasFavoritas);

// // b)
// console.log(`Essas são minhas comidas favoritas:
//     ${comidasFavoritas[0]}
//     ${comidasFavoritas[1]}
//     ${comidasFavoritas[2]}
//     ${comidasFavoritas[3]}
//     ${comidasFavoritas[4]}`);

// // c)
// comidasFavoritas[1] = prompt("Qual a sua comida favorita?");
// console.log(`Lista de comidas favoritas (a segunda é a sua):
//     ${comidasFavoritas[0]}
//     ${comidasFavoritas[1]}
//     ${comidasFavoritas[2]}
//     ${comidasFavoritas[3]}
//     ${comidasFavoritas[4]}`);

// // Exercício 3

// let listaDeTarefas = [];
// listaDeTarefas[0] = prompt("Digite a primeira tarefa que você precisa realizar hoje:");
// listaDeTarefas[1] = prompt("Digite a segunda tarefa que você precisa realizar hoje:");
// listaDeTarefas[2] = prompt("Digite a terceira tarefa que você precisa realizar hoje:");

// console.log(listaDeTarefas);

// let tarefaConcluida = prompt("Digite o índice da tarefa que você concluiu, de 0 a 2");
// listaDeTarefas.splice(tarefaConcluida, 1);

// console.log(listaDeTarefas);

// // --------------------------------------------------

// // DESAFIOS

// // Desafio 1

// let frase = prompt("Digite uma frase");
// let array = frase.split(" ");
// console.log(array);

// // Desafio 2

let frutas = ["Banana", "Morango", "Abacaxi", "Laranja", "Ameixa"];
let abacaxiIndex = frutas.indexOf("Abacaxi");
console.log(`Índice da palavra "Abacaxi": ${abacaxiIndex},
Comprimento da lista: ${frutas.length}`);