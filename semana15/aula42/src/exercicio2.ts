// ------------ EXERCÍCIO 2 ------------

// a) entrada = array de números, saída = objeto
// b)

function obterEstatisticas(numeros: number[]): {
    maior: number,
    menor: number,
    media: number
} {
    const numerosOrdenados: number[] = numeros.sort(
        (a, b) => a - b
    )

    let soma: number = 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas = {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: soma / numeros.length
    }

    return estatisticas
}

console.log(obterEstatisticas([1, 5, 2, 3, 100]));