// Exercícios de interpretação de código

// EXERCÍCIO 1
// a) O código testa se o número é par ou não.
// b) Números pares
// c) Números ímpares

// EXERCÍCIO 2
// a) Exibe o preço da fruta de acordo com o input do usuário
// b) "O preço da fruta Maçã é R$2.25"
// c) "O preço da fruta Pêra é R$5"

// EXERCÍCIO 3
// a) Está armazenando o dado que o usuário passa como input.
// b) se numero = 10, "Esse número passou no teste" e mensagem de erro
//    se numero = -10, apenas a mensagem de erro
// c) Sim, vai aparecer que a variável "mensagem" não foi definida, porque ela foi declarada no escopo local e não pode ser usada no escopo global.

// --------------------------------------------------

// Exercícios de escrita de código

// EXERCÍCIO 1

function isMaior (idade) {
    if (idade >= 18)
        console.log("Voê pode dirigir");
    else
        console.log("Voê não pode dirigir");
    }

const idade = Number(prompt("Digite sua idade"));
isMaior(idade);

// EXERCÍCIO 2

function verificaTurno () {
    const turno = prompt("Qual o seu turno? (Digite M para matutino/ V para vespertino / N para noturno)").toUpperCase();
    if (turno === "M")
        console.log("Bom Dia!");
    else if (turno === "V")
        console.log("Boa Tarde!");
    else if (turno === "N")
        console.log("Boa Noite!");
    else
        console.log("Turno inválido");
}

verificaTurno();

// EXERCÍCIO 3

function verificaTurno () {
    const turno = prompt(`Qual o seu turno? (Digite "M" para matutino/ "V" para vespertino / "N" para noturno)`).toUpperCase();
    switch(turno) {
        case "M":
            console.log("Bom Dia!");
            break;
        case "V":
            console.log("Boa Tarde!");
            break;
        case "N":
            console.log("Boa Noite!");
            break;
        default:
            console.log("Turno inválido");
    }
}

verificaTurno();

// EXERCÍCIO 4

function escolherFilme () {
    const generoFilme = prompt("Informe o gênero do filme").toLowerCase();
    const valorIngresso = Number(prompt("Informe o valor do ingresso"));
    if (generoFilme === "fantasia" && valorIngresso < 15)
        console.log("Bom filme!");
    else
        console.log("Escolha outro filme :(");
}

escolherFilme();

// --------------------------------------------------

// DESAFIOS

// DESAFIO 1

// Versão com operadores lógicos
function escolherFilme() {
  const generoFilme = prompt("Informe o gênero do filme").toLowerCase();
  const valorIngresso = Number(prompt("Informe o valor do ingresso"));

  if (generoFilme === "fantasia" && valorIngresso < 15) {
    console.log("Bom filme!");

    const lanche = prompt(
      "Escolha seu lanche: pipoca / chocolate / doces"
    ).toLowerCase();

    switch (lanche) {
      case "pipoca":
        console.log("Aproveite sua pipoca ;)");
        break;
      case "chocolate":
        console.log("Aproveite seu chocolate ;)");
        break;
      case "doces":
        console.log("Aproveite seus doces ;)");
        break;
      case "":
        break;
      default:
        console.log(`Infelizmente não temos ${lanche} hoje :()`);
    }
  } else {
    console.log("Escolha outro filme :(");
  }
}

escolherFilme();

// Nesta versão, caso o usuário informe um gênero que não seja fantasia, o programa já imprime a mensagem "Escolha outro filme".
function escolherFilme2() {
  const generoFilme = prompt("Informe o gênero do filme").toLowerCase();

  if (generoFilme === "fantasia") {
    const valorIngresso = Number(prompt("Informe o valor do ingresso"));

    if (valorIngresso < 15) {
      console.log("Bom filme!");

      const lanche = prompt(
        "Escolha seu lanche: pipoca / chocolate / doces"
      ).toLowerCase();

      switch (lanche) {
        case "pipoca":
          console.log("Aproveite sua pipoca ;)");
          break;
        case "chocolate":
          console.log("Aproveite seu chocolate ;)");
          break;
        case "doces":
          console.log("Aproveite seus doces ;)");
          break;
        case "":
          break;
        default:
          console.log(`Infelizmente não temos ${lanche} hoje :()`);
      }
    } else {
      console.log("Escolha outro filme :(");
    }
  } else {
    console.log("Escolha outro filme :(");
  }
}

escolherFilme2();

// DESAFIO 2

function compraIngressos() {
  let nome = prompt("Informe seu nome completo");
  let tipoJogo = prompt(
    `Informe o tipo de jogo: Digite "IN" para internacional / "DO" para doméstico`
  ).toUpperCase();
  let etapa = prompt(
    `Informe a etapa do jogo: Digite "SF" para semi-final / "DT" para decisão de terceiro lugar / "FI" para final`
  ).toUpperCase();
  let categoria = Number(prompt("Informe a categoria: 1 / 2 / 3 / 4"));
  let qtdeIngressos = Number(prompt("Informe a quantidade de ingressos"));
  let valorIngresso;
  let valorTotal;

  switch (etapa) {
    case "SF":
      etapa = "Semi-final";
      if (categoria === 1) valorIngresso = 1320;
      else if (categoria === 2) valorIngresso = 880;
      else if (categoria === 3) valorIngresso = 550;
      else if (categoria === 4) valorIngresso = 220;
      else console.log(`Erro: categoria ${categoria} inválida.`);
      break;
    case "DT":
      etapa = "Decisão do 3º lugar";
      if (categoria === 1) valorIngresso = 660;
      else if (categoria === 2) valorIngresso = 440;
      else if (categoria === 3) valorIngresso = 330;
      else if (categoria === 4) valorIngresso = 170;
      else console.log(`Erro: categoria ${categoria} inválida.`);
      break;
    case "FI":
      etapa = "Final";
      if (categoria === 1) valorIngresso = 1980;
      else if (categoria === 2) valorIngresso = 1320;
      else if (categoria === 3) valorIngresso = 880;
      else if (categoria === 4) valorIngresso = 330;
      else console.log(`Erro: categoria ${categoria} inválida.`);
      break;
    default:
      console.log("Erro: etapa inválida");
  }

  if (tipoJogo === "IN") {
    valorIngresso *= 4.1;
    tipoJogo = "Internacional";
  } else if (tipoJogo === "DO") {
    tipoJogo = "Doméstico";
  } else {
    console.log("Erro: tipo de jogo inválido");
  }

  valorTotal = valorIngresso * qtdeIngressos;

  console.log(`---Dados da compra---
Nome do cliente: ${nome}
Tipo do jogo: ${tipoJogo}
Etapa do jogo: ${etapa}
Categoria: ${categoria}
Quantidade de Ingressos: ${qtdeIngressos}
---Valores--- 
Valor do ingresso: R$${valorIngresso.toFixed(2)}
Valor total: R$${valorTotal.toFixed(2)}`);
}

compraIngressos();
