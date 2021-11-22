enum tipoDeRoupa {
    VERAO = "verao",
    INVERNO = "inverno",
    BANHO = "banho",
    INTIMAS = "intimas"
}

type Produto = {
    nome: string
    preco: number,
    classificacao: tipoDeRoupa
}

function determinaPreco(produto: Produto): string {
    let precoFinal: number | string;

    switch (produto.classificacao) {
        case tipoDeRoupa.VERAO:
            precoFinal = (produto.preco * 0.95).toFixed(2);
            break;
        case tipoDeRoupa.INVERNO:
            precoFinal = (produto.preco * 0.90).toFixed(2);
            break;
        case tipoDeRoupa.BANHO:
            precoFinal = (produto.preco * 0.96).toFixed(2);
            break;
        case tipoDeRoupa.INTIMAS:
            precoFinal = (produto.preco * 0.93).toFixed(2);
            break;
        default:
            precoFinal = "indefinido"
    }
    return `preço com desconto: R$ ${precoFinal}`
}

const biquine: Produto = {
    nome: "biquine",
    preco: 70.00,
    classificacao: tipoDeRoupa.BANHO
}

console.log(determinaPreco(biquine));