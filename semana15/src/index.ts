// // ------------ EXERCÍCIO 1 ------------

// // a) Ao tentar atribuir um número à string, um erro é mostrado no editor: "Type 'number' is not assignable to type 'string'."

// let minhaString: string = "Minha string!!!!";
// // minhaString = 3;

// // b) Usando o operador | é possível fazer com que uma variável aceite mais de um tipo de dados.

// let meuNumero: number | string = 1;
// meuNumero = "1";

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

// // d)

// type Pessoa = {
//     nome: string,
//     idade: number,
//     corFavorita: CoresArcoIris
// }

// enum CoresArcoIris {
//     VERMELHO = "vermelho",
//     LARANJA = "laranja",
//     AMARELO = "amarelo",
//     VERDE = "verde",
//     AZUL = "azul",
//     ANIL = "anil",
//     VIOLETA = "violeta"
// }

// const primeiraPessoa: Pessoa = {
//     nome: "Astrodev 2",
//     idade: 30,
//     corFavorita: CoresArcoIris.LARANJA
// }

// const segundaPessoa: Pessoa = {
//     nome: "Ana Padro 2",
//     idade: 31,
//     corFavorita: CoresArcoIris.VERMELHO
// }

// const terceiraPessoa: Pessoa = {
//     nome: "Carol 2",
//     idade: 29,
//     corFavorita: CoresArcoIris.AZUL
// }

// console.log(primeiraPessoa);
// console.log(segundaPessoa);
// console.log(terceiraPessoa);

// // ------------ EXERCÍCIO 2 ------------

// // a) entrada = array de números, saída = objeto
// // b)

// function obterEstatisticas(numeros: number[]): {
//     maior: number,
//     menor: number,
//     media: number
// } {
//     const numerosOrdenados: number[] = numeros.sort(
//         (a, b) => a - b
//     )

//     let soma: number = 0

//     for (let num of numeros) {
//         soma += num
//     }

//     const estatisticas = {
//         maior: numerosOrdenados[numeros.length - 1],
//         menor: numerosOrdenados[0],
//         media: soma / numeros.length
//     }

//     return estatisticas
// }

// console.log(obterEstatisticas([1, 5, 2, 3, 100]));

// // ------------ EXERCÍCIO 3 ------------

// // a)

// type Post = {
//     autor: string,
//     texto: string
// }

// const posts: Post[] = [
//     {
//         autor: "Alvo Dumbledore",
//         texto: "Não vale a pena viver sonhando e se esquecer de viver"
//     },
//     {
//         autor: "Severo Snape",
//         texto: "Menos 10 pontos para Grifinória!"
//     },
//     {
//         autor: "Hermione Granger",
//         texto: "É levi-ô-sa, não levio-sá!"
//     },
//     {
//         autor: "Dobby",
//         texto: "Dobby é um elfo livre!"
//     },
//     {
//         autor: "Lord Voldemort",
//         texto: "Avada Kedavra!"
//     }
// ]

// // b) entrada: array de objetos e string; saída: array de obetos

// function buscarPostsPorAutor(posts: Post[], autorInformado: string): Post[] {
//     return posts.filter(
//         (post) => {
//             return post.autor === autorInformado
//         }
//     )
// }

// console.log(buscarPostsPorAutor(posts, "Dobby"));

// // ------------ EXERCÍCIO 4 ------------
