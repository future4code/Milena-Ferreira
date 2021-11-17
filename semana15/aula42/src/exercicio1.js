// ------------ EXERCÍCIO 1 ------------
// a) Ao tentar atribuir um número à string, um erro é mostrado no editor: "Type 'number' is not assignable to type 'string'."
var minhaString = "Minha string!!!!";
// minhaString = 3;
// b) Usando o operador | é possível fazer com que uma variável aceite mais de um tipo de dados.
var meuNumero = 1;
meuNumero = "1";
var CoresArcoIris;
(function (CoresArcoIris) {
    CoresArcoIris["VERMELHO"] = "vermelho";
    CoresArcoIris["LARANJA"] = "laranja";
    CoresArcoIris["AMARELO"] = "amarelo";
    CoresArcoIris["VERDE"] = "verde";
    CoresArcoIris["AZUL"] = "azul";
    CoresArcoIris["ANIL"] = "anil";
    CoresArcoIris["VIOLETA"] = "violeta";
})(CoresArcoIris || (CoresArcoIris = {}));
var primeiraPessoa = {
    nome: "Astrodev 2",
    idade: 30,
    corFavorita: CoresArcoIris.LARANJA
};
var segundaPessoa = {
    nome: "Ana Padro 2",
    idade: 31,
    corFavorita: CoresArcoIris.VERMELHO
};
var terceiraPessoa = {
    nome: "Carol 2",
    idade: 29,
    corFavorita: CoresArcoIris.AZUL
};
console.log(primeiraPessoa);
console.log(segundaPessoa);
console.log(terceiraPessoa);
