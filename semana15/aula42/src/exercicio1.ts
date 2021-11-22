// a) Ao tentar atribuir um número à string, um erro é mostrado no editor: "Type 'number' is not assignable to type 'string'."

let minhaString: string = "Minha string!!!!";
// minhaString = 3;

// b) Usando o operador | é possível fazer com que uma variável aceite mais de um tipo de dados.

let meuNumero: number | string = 1;
meuNumero = "1";

// // c) 
// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: string
// }

// const primeiraPessoa: Pessoa = {
//     nome: "Astrodev",
//     idade: 30,
//     corFavorita: "laranja"
// }

// const segundaPessoa: Pessoa = {
//     nome: "Ana Padro",
//     idade: 31,
//     corFavorita: "vermelho"
// }

// const terceiraPessoa: Pessoa = {
//     nome: "Carol",
//     idade: 29,
//     corFavorita: "azul"
// }

// console.log(primeiraPessoa);
// console.log(segundaPessoa);
// console.log(terceiraPessoa);

// d)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: CoresArcoIris
}

enum CoresArcoIris {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    ANIL = "anil",
    VIOLETA = "violeta"
}

const primeiraPessoa: Pessoa = {
    nome: "Astrodev 2",
    idade: 30,
    corFavorita: CoresArcoIris.LARANJA
}

const segundaPessoa: Pessoa = {
    nome: "Ana Padro 2",
    idade: 31,
    corFavorita: CoresArcoIris.VERMELHO
}

const terceiraPessoa: Pessoa = {
    nome: "Carol 2",
    idade: 29,
    corFavorita: CoresArcoIris.AZUL
}

console.log(primeiraPessoa);
console.log(segundaPessoa);
console.log(terceiraPessoa);