// ------------ EXERCÍCIO 2 ------------
// a) entrada = array de números, saída = objeto
// b)
function obterEstatisticas(numeros) {
    var numerosOrdenados = numeros.sort(function (a, b) { return a - b; });
    var soma = 0;
    for (var _i = 0, numeros_1 = numeros; _i < numeros_1.length; _i++) {
        var num = numeros_1[_i];
        soma += num;
    }
    var estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    };
    return estatisticas;
}
console.log(obterEstatisticas([1, 5, 2, 3, 100]));
