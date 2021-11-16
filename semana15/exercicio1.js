// a) usamos a propriedade process.argv[n]

if (process.argv.length !== 4) {
    console.log("São necessários dois parâmetros: nome e idade.");
} else {
    const nome = process.argv[2]
    const idade = process.argv[3]
    const idadeEm7Anos = Number(idade) + 7;
    console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEm7Anos} anos.`)
}