enum GENERO {
    ACAO = "ação",
    DRAMA = "drama",
    COMEDIA = "comedia",
    ROMANCE = "romance",
    TERROR = "terror"
}

type filme = {
    nome : string,
    anoLancamento : number,
    genero : GENERO,
    pontuacao? : number,
}

function mostrarInfoFilme (
    nome: string,
    anoLancamento : number,
    genero : GENERO,
    pontuacao? : number
    ) : filme {

    if (pontuacao) {
        return {
            nome,
            anoLancamento,
            genero,
            pontuacao
        }
    } else {
        return {
            nome,
            anoLancamento,
            genero,

        }
    }
}

console.log(mostrarInfoFilme("Bacurau", 2021, GENERO.DRAMA, 4));
console.log(mostrarInfoFilme("Duna", 2021, GENERO.ACAO));
