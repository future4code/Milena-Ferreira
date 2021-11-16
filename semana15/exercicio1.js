// a) usamos a propriedade process.argv[n]

const nome = process.argv[2]
const idade = process.argv[3]
const idadeEm7Anos = Number(idade) + 7;

console.log(`Olá, ${nome}! Você tem ${idade} anos. Em sete anos você terá ${idadeEm7Anos} anos.`)