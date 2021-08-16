// // Exercícios de interpretação de código

// // EXERCÍCIO 1

// // Matheus Nachtergaele
// // Virginia Cavendish
// // {canal: "Globo", horario: "14h"}

// // EXERCÍCIO 2

// // a)
// // { nome: "Juca", idade: 3, raca: "SRD" }
// // { nome: "Juba", idade: 3, raca: "SRD" }
// // { nome: "Jubo", idade: 3, raca: "SRD" }

// // b) O operador spread (...) copia os dados de um objeto ou array para outro, permitindo que os dados do array original sejam modiicados e outros dados sejam acrescentados no novo array.

// // EXERCÍCIO 3

// // a)
// // false
// // undefined

// // b) A função acessa o objeto e a propriedade que são passadas como parâmetros e retorna o valor da propriedade em questão. No caso da propriedade "backender", o valor é false. Como a propriedade "altura" não existe no objeto, o valor retornado é undefined.

// // --------------------------------------------------

// // Exercícios de escrita de código

// // EXERCÍCIO 1

// a)
const pessoa = {
    nome: "Milena",
    apelidos: ["Mili", "Mi", "Mimi"]
}

function apresentarSe (objeto) {
    console.log(`Eu sou ${objeto.nome}, mas pode me chamar de: ${objeto.apelidos[0]},  ${objeto.apelidos[1]} ou  ${objeto.apelidos[2]}`);
}
apresentarSe(pessoa);

// b)
const novosApelidos = {...pessoa, apelidos: ["Mica", "Minena", "Nena"]};
apresentarSe(novosApelidos);

const novosApelidos = {...pessoa, apelidos: ["Mica", "Minena", "Nena"]};
apresentarSe(novosApelidos);

// // EXERCÍCIO 2

// // EXERCÍCIO 3


// // --------------------------------------------------

// // DESAFIOS

// // DESAFIO 1