// // Exercícios de interpretação de código

// // EXERCÍCIO 1
// // Minha resposta:
// { nome: "Amanda Rangel", apelido: "Mandi" },0, usuarios
// { nome: "Laís Petra", apelido: "Laura" },1, usuarios
// { nome: "Letícia Chijo", apelido: "Chijo" },2,usuarios

// RESPOSTA CERTA:
// { nome: "Amanda Rangel", apelido: "Mandi" }, 0, [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// { nome: "Laís Petra", apelido: "Laura" }, 1, [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
// ]
// { nome: "Letícia Chijo", apelido: "Chijo" }, 2, [
//     { nome: "Amanda Rangel", apelido: "Mandi" },
//     { nome: "Laís Petra", apelido: "Laura" },
//     { nome: "Letícia Chijo", apelido: "Chijo" }
// ]

// // EXERCÍCIO 2
// // Retorna: [ "Amanda Rangel", "Laís Petra", "Letícia Chijo"]

// // EXERCÍCIO 3

// // Minha resposta: ["Mandi", "Laura"]

// // Resposta correta: ele devolve os objetos inteiros, qualquer objeto cujo apelido não seja "Chijo"
// [
//     { nome: 'Amanda Rangel', apelido: 'Mandi' },
//     { nome: 'Laís Petra', apelido: 'Laura' }
// ]

// // --------------------------------------------------

// // Exercícios de escrita de código

// // EXERCÍCIO 1

const pets = [
    { nome: "Lupin", raca: "Salsicha" },
    { nome: "Polly", raca: "Lhasa Apso" },
    { nome: "Madame", raca: "Poodle" },
    { nome: "Quentinho", raca: "Salsicha" },
    { nome: "Fluffy", raca: "Poodle" },
    { nome: "Caramelo", raca: "Vira-lata" },
]

// a) Crie um novo array que contenha apenas o nome dos doguinhos

const arrayNomes = pets.map((item) => {
    return item.nome;
});
// console.log(arrayNomes);

// b) Crie um novo array apenas com os cachorros salsicha
const arraySalsichas = pets.filter((item) => {
    if (item.raca === "Salsicha") return item;
})
// console.log(arraySalsichas);

// c) Crie um novo array que possuirá mensagens para enviar para todos os clientes que são poodles.A mensagem deve ser: "Você ganhou um cupom de desconto de 10% para tosar o/a [NOME]!"

const selecionaPoodles = (cachorro) => {
    if (cachorro.raca === "Poodle") {
        return cachorro;
    }
}

const criaMensagem = (cachorro) => {
    return `Você ganhou um cupom de desconto de 10% para tosar o/a ${cachorro.nome}`
}
const mensagem = pets.filter(selecionaPoodles).map(criaMensagem);
// console.log(mensagem);

// // EXERCÍCIO 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
]

// a) Crie um novo array que contenha apenas o nome de cada item
const nomesProdutos = produtos.map((item) => {
    return item.nome;
})
// console.log(nomesProdutos);

// b) Crie um novo array que contenha um objeto com o nome e o preço de cada item, aplicando 5 % de desconto em todos eles
const precoComDesconto = produtos.map((item) => {
    const precoFinal = (item.preco * 0.95).toFixed(2);
    return `${item.nome}: de R$${item.preco} por apenas R$${precoFinal}`
})
// console.log(precoComDesconto);

// c) Crie um novo array que contenha apenas os objetos da categoria Bebidas
const bebidas = produtos.filter((item) => {
    if (item.categoria === "Bebidas") return item;
})
// console.log(bebidas);

// d) Crie um novo array que contenha apenas os objetos cujo nome contenha a palavra "Ypê"

const verificaSeContemYpe = (item) => {
    if (item.nome.includes('Ypê')) return item;
}
const contemYpe = produtos.filter(verificaSeContemYpe)
// console.log(contemYpe);

// e) Crie um novo array onde cada item é uma frase "Compre [NOME] por [PREÇO]". Esse array deve conter frases apenas dos itens cujo nome contenha a palavra "Ypê"

const geraFrase = (item) => {
    return `Compre ${item.nome} por R$${item.preco.toFixed(2)}`
}

const frasesProdsYpe = produtos.filter(verificaSeContemYpe).map(geraFrase);
// console.log(frasesProdsYpe);

// // --------------------------------------------------

// // DESAFIOS

// // DESAFIO 1

const pokemons = [
    { nome: "Bulbasaur", tipo: "grama" },
    { nome: "Bellsprout", tipo: "grama" },
    { nome: "Charmander", tipo: "fogo" },
    { nome: "Vulpix", tipo: "fogo" },
    { nome: "Squirtle", tipo: "água" },
    { nome: "Psyduck", tipo: "água" },
]

// a) Crie um novo array que contenha apenas o nome dos pokémons em ordem alfabética
const pokemonsOrdemAlfabetica = pokemons
    .map((pokemon) => {
        return pokemon.nome;
    }
    ).sort()
// console.log(pokemonsOrdemAlfabetica);

// b) Crie um novo array apenas com os tipos dos pokémons, sem repetição
const tiposPokemons = pokemons
    .map((pokemon, index, array) => {
        return pokemon.tipo;
    })
    .filter((tipoPoke, index, array) => {
        if (array.indexOf(tipoPoke) === index) return tipoPoke
    })
console.log(tiposPokemons)