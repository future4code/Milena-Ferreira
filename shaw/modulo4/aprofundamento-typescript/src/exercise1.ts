// Exercício 1

// a) aparece a mensagem "Type 'number' is not assignable to type 'string'.ts(2322)"

// b)  const meuNumero : number | string;

// c)

type Pessoa = {
    nome: string,
    idade: number,
    corFavorita: coresArcoIris
}

enum coresArcoIris {
    VERMELHO = "Azul",
    LARANJA = "Laranja",
    AMARELO = "Amarelo",
    VERDE = "Verde",
    AZUL = "Azul",
    ANIL = "Anil",
    VIOLETA = "Violeta"
}

const primeiraPessoa: Pessoa = {
    nome: "Astrodev",
    idade: 30,
    corFavorita: coresArcoIris.AZUL
}

const segundaPessoa: Pessoa = {
    nome: "Milena",
    idade: 29,
    corFavorita: coresArcoIris.VERMELHO
}

const terceiraPessoa: Pessoa = {
    nome: "Mateus",
    idade: 27,
    corFavorita: coresArcoIris.AMARELO
}