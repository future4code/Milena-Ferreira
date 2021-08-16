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

// EXERCÍCIO 2

// a)
const objeto1 = {
    nome: "Alice",
    idade: 23,
    profissao: "UX designer"
}

const objeto2 = {
    nome: "Lucas",
    idade: 30,
    profissao: "desenvolvedor web"
}

// b)
function minhaFuncao (objeto) {
    return [
            objeto.nome,
            objeto.nome.length,
            objeto.idade,
            objeto.profissao,
            objeto.profissao.length
        ] 
}

console.log(minhaFuncao(objeto1));

// EXERCÍCIO 3

// a)
const carrinho = [];

//b)
const fruta1 = { nome: "morango", disponibilidade: true};
const fruta2 = { nome: "pêssego", disponibilidade: true};
const fruta3 = { nome: "uva", disponibilidade: true};

// c)
function addCarrinho (fruta) {
    carrinho.push(fruta);
}
// d)
addCarrinho(fruta1);
addCarrinho(fruta2);
addCarrinho(fruta3);
console.log(carrinho);

// --------------------------------------------------

// DESAFIOS

// DESAFIO 1
function usuario () {
    const nome = prompt("Digite seu nome");
    const idade = Number(prompt("Digite sua idade"));
    const profissao = prompt("Digite sua profissao");
    const objeto = {
        nome: nome,
        idade: idade,
        profissao: profissao
    }
    console.log(objeto, typeof(objeto));
}
usuario();

// DESAFIO 2

const filme1 = {anoLancamento: 2001, nome: "O Fabuloso Destino de Amélie Poulain"};
const filme2 = {anoLancamento: 2019, nome: "Bacurau"};

function comparaFilmes(filme1, filme2) {
    console.log("O primeiro filme foi lançado antes do segundo?",
                filme1.anoLancamento > filme2.anoLancamento);
    console.log("O primeiro filme foi lançado no mesmo ano do segundo?",
                filme1.anoLancamento === filme2.anoLancamento);
}
comparaFilmes(filme1, filme2);

// DESAFIO 3
const fruta1 = { nome: "morango", disponibilidade: true};
const fruta2 = { nome: "pêssego", disponibilidade: true};
const fruta3 = { nome: "uva", disponibilidade: true};

function controlaEstoque (fruta) {
    fruta.disponibilidade = !fruta.disponibilidade;
    return fruta; 
}
console.log(controlaEstoque(fruta1));