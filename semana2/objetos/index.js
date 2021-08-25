// Exercícios de interpretação de código

// EXERCÍCIO 1

// Matheus Nachtergaele
// Virginia Cavendish
// {canal: "Globo", horario: "14h"}

// EXERCÍCIO 2

// a)
// { nome: "Juca", idade: 3, raca: "SRD" }
// { nome: "Juba", idade: 3, raca: "SRD" }
// { nome: "Jubo", idade: 3, raca: "SRD" }

// b) O operador spread (...) copia os dados de um objeto ou array para outro, permitindo que os dados do array original sejam modiicados e outros dados sejam acrescentados no novo array.

// EXERCÍCIO 3

// a)
// false
// undefined

// b) A função acessa o objeto e a propriedade que são passadas como parâmetros e retorna o valor da propriedade em questão. No caso da propriedade "backender", o valor é false. Como a propriedade "altura" não existe no objeto, o valor retornado é undefined.

// --------------------------------------------------

// Exercícios de escrita de código

// EXERCÍCIO 1

// // a)
// const pessoa = {
//     nome: "Milena",
//     apelidos: ["Mili", "Mi", "Mimi"]
// }

// function apresentarSe(objeto) {
//     console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},  ${objeto.apelidos[1]} ou  ${objeto.apelidos[2]}`);
// }
// apresentarSe(pessoaVersao2);

// // b)
// const novosApelidos = { ...pessoaVersao2, apelidos: ["Mica", "Minena", "Nena"] };
// apresentarSe(novosApelidos);

// const novosApelidos2 = { ...pessoaVersao2, apelidos: ["Mica", "Minena", "Nena"] };

// apresentarSe(novosApelidos);
// apresentarSe(novosApelidos2);

// // EXERCÍCIO 2

// // a)
// const pessoa1 = {
//     nome: "Alice",
//     idade: 23,
//     profissao: "UX designer"
// }

// const pessoa2 = {
//     nome: "Lucas",
//     idade: 30,
//     profissao: "desenvolvedor web"
// }

// // b)
// function retornaInfosSobrePessoa(pessoa) {
//     return [
//         pessoa.nome,
//         pessoa.nome.length,
//         pessoa.idade,
//         pessoa.profissao,
//         pessoa.profissao.length
//     ]
// }
// console.log(retornaInfosSobrePessoa(pessoa1));

// // EXERCÍCIO 3

// // a)
// const carrinho = [];

// //b)
// const morango = { nome: "morango", disponibilidade: true };
// const pessego = { nome: "pêssego", disponibilidade: true };
// const uva = { nome: "uva", disponibilidade: true };

// // c)
// function addCarrinho(fruta) {
//     carrinho.push(fruta);
// }

// addCarrinho(morango);
// addCarrinho(pessego);
// addCarrinho(uva);

// // d)
// console.log(carrinho);

// --------------------------------------------------

// DESAFIOS

// // DESAFIO 1

// function pessoaVersao2() {
//     const pessoa = {
//         nome: prompt("Digite seu nome"),
//         idade: Number(prompt("Digite sua idade")),
//         profissao: prompt("Digite sua profissao")
//     }
//     console.log(pessoa, typeof (pessoa));
// }

// pessoaVersao2();

// // Solução original:
// function pessoa() {
//     const nome = prompt("Digite seu nome");
//     const idade = Number(prompt("Digite sua idade"));
//     const profissao = prompt("Digite sua profissao");
//     const pessoa = {
//         nome: nome,
//         idade: idade,
//         profissao: profissao
//     }
//     console.log(pessoa, typeof (pessoa));
// }
// pessoa();

// // DESAFIO 2

// const filme1 = { anoLancamento: 2001, nome: "O Fabuloso Destino de Amélie Poulain" };
// const filme2 = { anoLancamento: 2019, nome: "Bacurau" };

// function comparaFilmes(filme1, filme2) {
//     return `O primeiro filme foi lançado antes do segundo? ${filme1.anoLancamento > filme2.anoLancamento}
// O primeiro filme foi lançado no mesmo ano do segundo? ${filme1.anoLancamento === filme2.anoLancamento}`;
// }
// console.log(comparaFilmes(filme1, filme2));

// // DESAFIO 3
const morango = { nome: "morango", disponibilidade: true };
const pessego = { nome: "pêssego", disponibilidade: true };
const uva = { nome: "uva", disponibilidade: true };

// Solução do Yuzo, não altera o objeto original
function inverteDisponibilidade(fruta) {
    return { ...fruta, disponibilidade: !fruta.disponibilidade }
}
console.log(inverteDisponibilidade(morango));

// Solucão minha, altera o objeto original§
function controlaEstoque(fruta) {
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta;
}
console.log(controlaEstoque(morango));