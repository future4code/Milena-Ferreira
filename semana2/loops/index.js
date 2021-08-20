// // Exercícios de interpretação de código

// // EXERCÍCIO 1
// // Está somando todos os valores de 0 até 4. O valor impresso será 10.

// // EXERCÍCIO 2
// // a) Todos os númerios maiores que 18
// // b) Sim, usando o método indexOf():
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30];
// for (let numero of lista) {
//   console.log(`O index de ${numero} é ${lista.indexOf(numero)}`);
// }

// // EXERCÍCIO 3
// // Imprime:
// // *
// // **
// // ***
// // ****

// // --------------------------------------------------

// // Exercícios de escrita de código

// // EXERCÍCIO 1

// const pets = Number(prompt("Quantos animais de estimação você tem?"));

// if (pets === 0) console.log("Que pena! Você pode adotar um pet!");
// else {
//   let nomesPets = [];
//   for (i = 0; i < pets; i++) {
//     nomesPets[i] = prompt(`Digite o nome do pet ${i + 1}`);
//   }
//   console.log("Esses são os seus pets:");
//   for (let pet of nomesPets) {
//     console.log(`Pet nº ${nomesPets.indexOf(pet) + 1}: ${pet}`);
//   }
// }

// // EXERCÍCIO 2

const lista = [2, 20, 33, 4];

// // a)

function imprimeValores(array) {
  for (let elemento of array) {
    console.log(elemento);
  }
}

// imprimeValores(lista);

// // b)
function imprimeDivididoPor10(array) {
  for (let elemento of array) {
    console.log(elemento / 10);
  }
}

// imprimeDivididoPor10(lista);

// // c)

function criaArrayComPares(array) {
  let arrayPares = [];
  for (let elemento of array) {
    if (elemento % 2 === 0) arrayPares.push(elemento);
  }
  console.log(arrayPares);
}

// criaArrayComPares(lista);

// // d)

function criaArrayComStrings(array) {
  let arrayStrings = [];

  for (i = 0; i < array.length; i++) {
    arrayStrings[i] = `O elemento do índex ${i} é: ${array[i]}`;
  }

  for (elemento of arrayStrings) {
    console.log(elemento);
  }
}
// criaArrayComStrings(lista);

// // Opção com for...of

// function criaArrayComStrings2(array) {
//   let arrayStrings = [];

//   for (elemento of array) {
//     arrayStrings[
//       array.indexOf(elemento)
//     ] = `O elemento do índex ${array.indexOf(elemento)} é: ${elemento}`;
//   }

//   for (elemento of arrayStrings) {
//     console.log(elemento);
//   }
// }
// criaArrayComStrings2(lista);

// // e)

function imprimeMaiorEMenor(array) {
  let maiorValor = 0;
  let menorValor = 10000000;
  for (elemento of array) {
    if (elemento > maiorValor) maiorValor = elemento;
    if (elemento < menorValor) menorValor = elemento;
  }
  console.log(`Maior número: ${maiorValor}
Menor número: ${menorValor}`)
}
// imprimeMaiorEMenor(lista);

// // --------------------------------------------------

// // DESAFIOS

// // DESAFIO 1

// function adivinheONumero() {
//   let numeroImaginado = Number(prompt("Jogador 1, escolha o número:"));
//   console.log("Vamos jogar!")
//   let numeroChutado;
//   let tentativas = 1;
//   while (numeroChutado !== numeroImaginado) {
//     numeroChutado = Number(prompt("Jogador 2, adivinhe o número:"));
//     console.log(`O número chutado foi: ${numeroChutado}`)
//     if (numeroChutado > numeroImaginado) {
//       console.log("Errou. O número escolhido é menor.");
//     }
//     else if (numeroChutado < numeroImaginado) {
//       console.log("Errou. O número escolhido é maior.");
//     }
//     tentativas++;
//   }
//   console.log(`Acertou! O número escolhido era ${numeroImaginado}`);
//   console.log(`O número de tentativas foi: ${tentativas}`)
// }
// adivinheONumero();

// // Versão que exibe mensagens apenas no prompt

// function adivinheONumeroVersao2() {
//   let numeroImaginado = Number(prompt("Jogador 1, escolha o número:"));
//   let tentativa = Number(prompt("Jogador 2, adivinhe o número:"));
//   while (tentativa !== numeroImaginado) {
//     if (tentativa > numeroImaginado) {
//       tentativa = Number(prompt("Errrrrrrrou, é menor! Tente de novo:"));
//     }
//     else {
//       tentativa = Number(prompt("Errrrrrrrou, é maior! Tente de novo:"));
//     }
//   }
//   alert("Acertou!");
// }
// adivinheONumeroVersao2(10);

// // DESAFIO 2

function intervaloNumeros(minimo, maximo) {
  minimo = Math.floor(minimo);
  maximo = Math.ceil(maximo);
  return Math.floor(Math.random() * (maximo - minimo) + minimo);
}

function adivinheONumeroComputador() {
  let numeroImaginado = Number(prompt("Jogador 1, escolha o número:"));
  console.log("Vamos jogar!")
  let numeroMinimo = 1
  let numeroMaximo = 100;
  let numeroChutado = intervaloNumeros(numeroMinimo, numeroMaximo);
  let tentativas = 1;
  while (numeroChutado !== numeroImaginado) {
    console.log(`O número chutado foi: ${numeroChutado}`)
    if (numeroChutado > numeroImaginado) {
      numeroMaximo = numeroChutado;
      console.log("Errou. O número escolhido é menor.")
    } else {
      numeroMinimo = numeroChutado;
      console.log("Errou. O número escolhido é maior.")
    }
    numeroChutado = intervaloNumeros(numeroMinimo, numeroMaximo);
    tentativas++;
  }
  console.log(`Acertou! O número escolhido era ${numeroImaginado}`);
  console.log(`O número de tentativas foi: ${tentativas}`)
}
adivinheONumeroComputador();
