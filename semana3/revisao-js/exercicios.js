// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
    return array.length;
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse();
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function (a, b) { return a - b });
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let arrayPares = [];
    for (numero of array) {
        if (numero % 2 === 0) arrayPares.push(numero);
    }
    return arrayPares;
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let arrayPares = [];
    for (numero of array) {
        if (numero % 2 === 0) arrayPares.push(numero ** 2);
    }
    return arrayPares;
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = -1000;
    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) maior = array[i]
    }
    return maior;
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let maiorNumero;
    let menor;
    let maiorDivisivelPorMenor;
    let diferenca;

    if (num1 >= num2) {
        maiorNumero = num1;
        menor = num2
    } else {
        maiorNumero = num2;
        menor = num1;
    }

    let objeto = {
        maiorNumero: maiorNumero,
        maiorDivisivelPorMenor: maiorNumero % menor === 0,
        diferenca: maiorNumero - menor
    }
    return objeto;
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let array = [];
    for (i = 0; i < 2 * n; i += 2) array.push(i);
    return array;
}


// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {
    if (ladoA === ladoB
        && ladoA === ladoC) return "Equilátero";
    else if (ladoA !== ladoB
        && ladoA !== ladoC
        && ladoB !== ladoC) return "Escaleno";
    else return "Isósceles";
}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    array.sort(function (a, b) { return b - a });
    return [array[1], array[array.length - 2]];
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
    let atores = [];
    for (let i = 0; i < filme.atores.length; i++) {
        atores.push(` ${filme.atores[i]}`)
    }
    return `Venha assistir ao filme ${filme.nome}, de ${filme.ano}, dirigido por ${filme.diretor} e estrelado por${atores}.`
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
    return { ...pessoa, nome: "ANÔNIMO" }
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {

}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {

}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {

}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {

}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {

}