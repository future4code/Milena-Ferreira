// // ------------ EXERCÍCIO 1 ------------
var posts = [
    {
        autor: "Alvo Dumbledore",
        texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
        autor: "Severo Snape",
        texto: "Menos 10 pontos para Grifinória!"
    },
    {
        autor: "Hermione Granger",
        texto: "É levi-ô-sa, não levio-sá!"
    },
    {
        autor: "Dobby",
        texto: "Dobby é um elfo livre!"
    },
    {
        autor: "Lord Voldemort",
        texto: "Avada Kedavra!"
    }
];
// b) entrada: array de objetos e string; saída: array de obetos
function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(function (post) {
        return post.autor === autorInformado;
    });
}
console.log(buscarPostsPorAutor(posts, "D"));
