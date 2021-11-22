function imprimeInfosNumeros(numero1: number, numero2: number): {
    soma: number,
    subtracao: number,
    multiplicacao: number,
    maiorNumero: number
} {
    const soma: number = numero1 + numero2;
    const subtracao: number = numero1 - numero2;
    const multiplicacao: number = numero1 * numero2;
    const maiorNumero: number = (numero1 > numero2) ? numero1 : numero2;

    return {
        soma: soma,
        subtracao: subtracao,
        multiplicacao: multiplicacao,
        maiorNumero: maiorNumero
    }
}

console.log(imprimeInfosNumeros(11, 5));