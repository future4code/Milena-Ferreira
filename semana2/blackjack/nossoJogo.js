/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 *
 *
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros

    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 */

console.log("Boas vindas ao jogo de Blackjack!");
const OK = confirm("Quer iniciar uma nova rodada?");
if (OK === true) console.log("Vamos começar"); //substituir por função da rodada
else console.log("O jogo acabou")

const distribuiCartas = (numeroDeCartas) => {
   const cartas = [];
   for (i = 0; i < numeroDeCartas; i++) {
      cartas.push(comprarCarta());
   }
   return cartas;
}

const mostraCartas = (jogador) => {
   const textoCartas = [];
   let pontos = 0;
   for (carta of jogador.cartas) {
      textoCartas.push(carta.texto);
      pontos += carta.valor;
   }
   let cartas = textoCartas.join(" ");
   return `${jogador.nome} - cartas: ${cartas} - pontuação: ${pontos}`
}

const somaPontos = (jogador) => {
   let pontos = 0;
   for (carta of jogador.cartas) {
      pontos += carta.valor;
   }
   return pontos;
}

const indicaVencedor = (jogadores) => {
   const pontos1 = somaPontos(jogadores[0]);
   const pontos2 = somaPontos(jogadores[1]);

   if (pontos1 > pontos2) return "O usuário ganhou!";
   else if (pontos1 < pontos2) return "O computador ganhou!";
   else return "Empate!";
}

const jogadores = [
   { nome: "Usuário", cartas: distribuiCartas(2) },
   { nome: "Computador", cartas: distribuiCartas(2) }
]

const mensagem1 = mostraCartas(jogadores[0]);
const mensagem2 = mostraCartas(jogadores[1]);
const resultado = indicaVencedor(jogadores);

console.log(mensagem1);
console.log(mensagem2);
console.log(resultado);
